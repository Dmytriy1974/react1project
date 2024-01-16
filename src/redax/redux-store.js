import {
  applyMiddleware,
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import usersReduser from "./users-reduser";
import authReducer from "./auth-reduser";
let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReducer,
});
let store = legacy_createStore(redusers, applyMiddleware ());
window.store = store;
export default store;
