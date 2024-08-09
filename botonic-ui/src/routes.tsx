import React from "react";
import { Route, Text, Reply } from "@botonic/react";
import AskResult from "./actions/AskResult";
import Entry from "./actions/Entry";
import BookHotel from "./actions/BookHotel";
import Bye from "./actions/Bye";
import CloseWebview from "./actions/CloseWebview";
import InfoReservation from "./actions/InfoReservation";
import NearMe from "./actions/NearMe";
import NotFound from "./actions/NotFound";
import SelectOption from "./actions/SelectOption";
import SpecificBudget from "./actions/SpecificBudget";
import SpecificLocation from "./actions/SpecificLocation";
import SpecificService from "./actions/SpecificService";
import Start from "./actions/Start";

export const routes: Route[] = [
  {
    path: "/",
    text: /.*/,
    action: Entry,
  },

  // nlp intent
  {
    path: "hello",
    payload: "greetings.hello",
    action: Start,
  },
  {
    path: "bye",
    payload: "greetings.bye",
    action: Bye,
  },
  {
    path: "ask",
    payload: "ask.common",
    action: SelectOption,
  },

  // by other action
  {
    path: "specific-location",
    payload: "specific-location",
    action: SpecificLocation,
    childRoutes: [
      {
        path: "specific-budget",
        payload: "specific-budget",
        action: SpecificBudget,
        childRoutes: [
          {
            path: "specific-service",
            payload: "specific-service",
            action: SpecificService,
          },
        ],
      },
    ],
  },
  {
    path: "near-me",
    payload: "near-me",
    action: NearMe,
  },
  {
    path: "ask-result",
    payload: "ask-result",
    action: AskResult,
  },
  {
    path: "none",
    payload: "None",
    action: NotFound,
  },

  // examples
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

  // not done botonic intent
  // {
  //   path: "not-found",
  //   input: (i) => i.intents && i.intents[0].confidence < 0.7,
  //   action: NotFound,
  // },
  // { path: "book-restaurant", intent: "BookRestaurant", action: BookRestaurant },
];
