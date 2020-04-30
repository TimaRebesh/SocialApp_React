const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

const initialState = {
  users: [
    {
      id: 1,
      followed: true,
      fullName: "Rick",
      status: "I am here",
      location: { country: "Poland", city: "Warsaw" },
      photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/28/14/hardy-getty2.jpg?w968h681",
    },
    {
      id: 2,
      followed: false,
      fullName: "Bob",
      status: "I am here",
      location: { country: "Poland", city: "Warsaw" },
      photo: "https://www.cheatsheet.com/wp-content/uploads/2019/10/Joker-Actor-1024x682.jpg",
    },
    {
      id: 3,
      followed: true,
      fullName: "Kate",
      status: "I am here",
      location: { country: "Poland", city: "Warsaw" },
      photo: "https://akm-img-a-in.tosshub.com/sites/btmt/images/stories/payal_rohatgi_660_181219102803.jpg",
    },
    {
      id: 4,
      followed: false,
      fullName: "Dima",
      status: "I am here",
      location: { country: "Belarus", city: "Minsk" },
      photo: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/28/14/hardy-getty2.jpg?w968h681",
    },
  ],
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
