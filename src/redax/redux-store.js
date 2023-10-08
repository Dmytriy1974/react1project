import {
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import usersReduser from "./users-reduser";
let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
  usersPage: usersReduser,
});
let store = legacy_createStore(redusers);
window.store = store;
export default store;
