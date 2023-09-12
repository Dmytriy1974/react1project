import "./index.css";
import store  from "./redax/state";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (store) => {
  root.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        addPosts={store.addPosts.bind(store)}
        updatePostChange={store.updatePostChange.bind(store)}
        addMessagesData={store.addMessagesData.bind(store)}
        updateMsgChange={store.updateMsgChange.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree)