const ADD_POSTS = "ADD-POSTS";
const UPDATE_POST_CHANGE = "UPDATE-POST-CHANGE";
export const addPostActionCreator = () => ({ type: ADD_POSTS });
export const updadePostChangeActionCreator = (text) => ({
  type: UPDATE_POST_CHANGE,
  inputChange: text,
});

let initialState={
  postsData: [
    { id: 1, message: "Hi, How are you?", likeCounts: 15 },
    { id: 2, message: "It's my first message", likeCounts: 20 },
  ],
  newPostText: "it-kamasutra",
};
const profileReduser = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POSTS:
      let post = {
        id: 3,
        message: state.newPostText,
        likeCounts: 1,
      };
      state.postsData.push(post);
      state.newPostText = "";

      return state;

    case UPDATE_POST_CHANGE:
      state.newPostText = action.inputChange;
      return state;

    default:
      return state;
  }

};
export default profileReduser;
