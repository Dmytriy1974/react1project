import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReduser from "./dialogs-reduser";
import usersReduser, { contentSlice } from "./users-reduser";
import authReducer from "./auth-reduser";
let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReduser,
  usersPage: usersReduser,
  auth: authReducer,
  users: contentSlice.reducer,
});
let store = configureStore({ reducer: reducers });
window.store = store;
export default store;
