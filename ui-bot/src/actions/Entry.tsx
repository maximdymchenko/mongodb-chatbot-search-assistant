import React from "react";
import { BACKEND_URL } from "../config";
import { ask } from "../ask";

export default class extends React.Component {
  static async botonicInit({ input, session, params, lastRoutePath }) {
    // console.log("input=", input);
    // console.log("session=", session);

    if (input.payload) {
      // from other action
      // @ts-ignore
      Botonic.addUserPayload(input.payload);
    } else {
      // from backend intent
      const url = BACKEND_URL + "/api/entry";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: input.data,
        }),
      });
      const resData = await res.json();
      console.log("resData=", resData);

      let result = null;
      if (resData === "None") {
        // random query
        result = await ask("search-all", input.data);
      }

      if (result) {
        session.resp = result;
        //@ts-ignore
        Botonic.addUserPayload("ask-result");
      } else {
        // @ts-ignore
        Botonic.addUserPayload(resData);
      }
    }
  }

  render() {
    return null;
  }
}
