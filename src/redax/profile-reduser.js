import { createAsyncThunk } from "@reduxjs/toolkit";
import { profileApi } from "../api/api";

const ADD_POSTS = "ADD-POSTS";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
const Set_User_Profile = "Set_User_Profile"
export const addPostActionCreator = () => ({ type: ADD_POSTS });
export const updatePostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  inputChange: text,
});
export const setUserProfile = (profile)=>({type:Set_User_Profile, profile})


export const UserProfileData = createAsyncThunk (
  "ProfileUser/data",
  async (userId, { dispatch }) => {
   profileApi.getUserProfile(userId).then ((response) => {
dispatch(setUserProfile(response.data))
   })
  });

let initialState = {
  postsData: [
    { id: 1, message: "Hi, How are you?", likeCounts: 15 },
    { id: 2, message: "It's my first message", likeCounts: 20 },
  ],
  newPostText: "it-kamasutra",
  profile: null
};
const profileReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_POST_CHANGE:
      return {
        ...state,
        newPostText: action.inputChange,
      };

    case ADD_POSTS: {
      let post = {
        id: 3,
        message: state.newPostText,
        likeCounts: 1,
      };
      return {
        ...state,
        postsData: [...state.postsData, post],
        newPostText: "",
      };
    }
    case Set_User_Profile:
      return {
        ...state,
        profile: action.profile,
      };
    default:
      return state;
  }
};
export default profileReduser;
