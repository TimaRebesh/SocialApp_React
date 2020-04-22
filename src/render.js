import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import state from "./redux/state";
import { addToProfile } from "./redux/state";

export const renderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addToProfile={addToProfile} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
