import React from "react";
import { Text, Button } from "@botonic/react";
import CheckReservationsWebview from "../webviews/components/CheckReservations";

export default class extends React.Component {
  render(this) {
    return (
      <>
        <Text>
          Select Properties
          <Button payload="specific-location" autodisable={true}>By Specific Location</Button>
          <Button payload="near-me" autodisable={true}>Near Me</Button>
          {/* <Button webview={CheckReservationsWebview}>
            Check your reservations
          </Button> */}
        </Text>
      </>
    );
  }
}
