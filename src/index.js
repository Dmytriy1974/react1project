import "./index.css";
import impStore from "./redax/redux-store";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={impStore}>
      <App store={impStore} />
    </Provider>
  </React.StrictMode>
);
