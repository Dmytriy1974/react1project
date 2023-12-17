const SET_USER_DATA = "SET_USER_DATA";



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
        isLoggin: true
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
