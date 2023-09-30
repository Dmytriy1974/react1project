import {
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
});
let store = legacy_createStore(redusers);
window.store = store;
export default store;
