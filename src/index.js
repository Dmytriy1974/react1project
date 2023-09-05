import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import state from "./redax/state";
import { rerenderEntireTree } from "./rerender";

rerenderEntireTree(state);

