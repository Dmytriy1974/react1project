import {
  applyMiddleware,
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import profileReduser from "./profile-reduser";
import dialogsReduser from "./dialogs-reduser";
import usersReduser, {contentSlice} from "./users-reduser";
import authReducer from "./auth-reduser";
let redusers = combineReducers({
  profilePage: profileReduser,
  messagesPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReducer,
  users: contentSlice.reducer
});
let store = configureStore({reducer: redusers});
window.store = store;
export default store;
