const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_Page = "SET_CURRENT_Page";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_FETCHING = "SET_FETCHING";
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_Page,
  currentPage,
});
export const setTotalUsersCount = (totalUsers) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsers,
});
export const setFetching = (isFetching) => ({
  type: SET_FETCHING,
  isFetching,
});

let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};
const usersReduser = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return {
              ...u,
              followed: false,
            };
          }
          return u;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_Page:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case SET_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export default usersReduser;
