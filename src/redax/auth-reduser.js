import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

// export const getAuthUserData = createAsyncThunk (
//   "AuthUsers/data",
//   async (payload, { dispatch }) => {
//     authApi.getAuthUserData().then((response) => {
//       if (response.data.resultCode === 0) {
//         let { id, login, email } = response.data.data;
//         dispatch(setAuthUserData(id, email, login));
//       }
//     });
//   }
// );


export const getAuthUserData = createAsyncThunk(
  "AuthUsers/data",
  async (payload, { dispatch }) => {
    try {
      const response = await authApi.getAuthUserData();
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
);

let initialState = {
  userId: null,
  email: null,
  login: null,
  isLoggin: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLoggin: true,
      };

    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login) => ({
  type: SET_USER_DATA,
  data: { userId, email, login },
});
export default authReducer;
