import React from "react";
import {
  RequestContext,
  Text,
  Carousel,
  Element,
  Pic,
  Button,
  Title,
  Subtitle,
} from "@botonic/react";
import { BACKEND_URL, API_VECTOR_TOKEN } from "../config";

export default class extends React.Component {
  static contextType = RequestContext;
  static async botonicInit({ input, session, params, lastRoutePath }) {
    
  }

  render() {
    return (
      <>
        {/* <Text>Nice! Here are the perfect properties matching near you</Text> */}
        <Text>Now this function is not done. Coming soon! 😀</Text>
      </>
    );
  }
}
