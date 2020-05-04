const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

const initialState = {
  users: [],
  pageSize: 5,
  totalUserCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((i) => {
          if (i.id === action.userID) {
            return { ...i, followed: true };
          }
          return i;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((i) => {
          if (i.id === action.userID) {
            return { ...i, followed: false };
          }
          return i;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.num };
    case SET_TOTAL_COUNT:
      return { ...state, totalUserCount: action.totalCount };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageAC = (num) => ({ type: SET_CURRENT_PAGE, num });
export const setTotalCountAC = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });

export default usersReducer;
