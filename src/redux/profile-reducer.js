import getNowDate from "./nowDate";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_PROFILE = "SET_PROFILE";

const initialState = {
  profilePost: [
    { id: 1, message: "Hi, how are you?", likeCount: 12, date: { year: "2020.01.01", hour: "10:00:00 " } },
    { id: 2, message: "My first post", likeCount: 2, date: { year: "2020.01.01", hour: "10:00:00 " } },
  ],
  newPostText: "",
  profile: null,
};

let count = 10;

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.text,
      };
    }
    case ADD_POST: {
      if (state.newPostText === "") {
        return state;
      }
      const text = state.newPostText;
      return {
        ...state,
        newPostText: "",
        profilePost: [
          {
            id: count++,
            message: text,
            likeCount: 0,
            date: {
              year: getNowDate("year"),
              hour: getNowDate("hour"),
            },
          },
          ...state.profilePost,
        ],
      };
    }
    case SET_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const changeTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({ type: SET_PROFILE, profile });

export default profileReducer;
