import React from "react";
import { Route, Text, Reply } from "@botonic/react";
import BookHotel from "./actions/BookHotel";
import Bye from "./actions/Bye";
import CloseWebview from "./actions/CloseWebview";
import ExternalSearch from "./actions/ExternalSearch";
import InfoReservation from "./actions/InfoReservation";
import NearMe from "./actions/NearMe";
import NotFound from "./actions/NotFound";
import NotSure from "./actions/NotSure";
import PickLocation from "./actions/PickLocation";
import SpecificLocation from "./actions/SpecificLocation";
import Start from "./actions/Start";

export const routes: Route[] = [
  {
    path: "/",
    text: /^(hi|hello|hey|start|)$/i,
    payload: "start",
    action: Start,
  },
  {
    path: "specific-location",
    payload: "specific-location",
    action: SpecificLocation,
    childRoutes: [
      {
        path: "pick-location",
        payload: "pick-location",
        action: PickLocation,
      },
    ],
  },
  {
    path: "near-me",
    payload: "near-me",
    action: NearMe,
  },
  {
    path: "external-search",
    payload: "external-search",
    action: ExternalSearch,
  },

  
  {
    path: "book-hotel",
    payload: /hotel-.*/,
    action: BookHotel,
  },
  {
    path: "info-reservation",
    payload: /enviar_.*/,
    action: InfoReservation,
  },
  {
    path: "close-webview",
    payload: "close-webview",
    action: CloseWebview,
  },
  {
    path: "Bye",
    payload: /rating-.*/,
    text: /^(bye|good bye|)$/i,
    action: Bye,
  },  
  {
    path: "not-sure",
    text: /.*/,
    action: NotSure,
  },

  // botonic intent way not done
  {
    path: "not-found",
    input: (i) => i.intents && i.intents[0].confidence < 0.7,
    action: NotFound,
  },
  // { path: "book-restaurant", intent: "BookRestaurant", action: BookRestaurant },
];
