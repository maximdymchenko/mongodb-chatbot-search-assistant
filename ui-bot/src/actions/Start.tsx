import React from "react";
import { Text, Button } from "@botonic/react";

export default class extends React.Component {
  static async botonicInit(request) {
    const name = request.session.user.name;
    return { name };
  }

  render(this) {
    return (
      <>
        <Text>
          Hi 👋, I'm your virtual assistant of Resortifi Platform. I will help
          you select anything you are looking for.
        </Text>
      </>
    );
  }
}
