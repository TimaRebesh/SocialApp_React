const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unFollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;
