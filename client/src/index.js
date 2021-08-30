import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <App></App>
  </StateProvider>,
  document.getElementById("root")
);
