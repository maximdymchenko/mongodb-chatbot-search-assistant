import { RequestContext, Text } from "@botonic/react";
import React from "react";

export default class extends React.Component {
  static contextType = RequestContext;

  render() {
    return (
      <>
        <Text>
          I'm sorry! 😴 I don't understand you! Could you please ask me again?
        </Text>
      </>
    );
  }
}
