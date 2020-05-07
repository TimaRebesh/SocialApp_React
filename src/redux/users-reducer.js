const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = " TOGGLE_IS_FETCHING ";

const initialState = {
  users: [],
  pageSize: 10,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
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
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    default:
      return state;
  }
};

export const follow = (userID) => ({ type: FOLLOW, userID });
export const unFollow = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (num) => ({ type: SET_CURRENT_PAGE, num });
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const togglePreloaderPng = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
