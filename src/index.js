import "./index.css";
import impStore from "./redax/store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={impStore.dispatch.bind(impStore)} />
    </React.StrictMode>
  );
};

rerenderEntireTree(impStore.getState());
impStore.subscribe(rerenderEntireTree);
