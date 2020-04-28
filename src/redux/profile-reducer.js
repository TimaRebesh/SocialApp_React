import getNowDate from "./nowDate";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const initialState = {
  profilePost: [
    { id: 1, message: "Hi, how are you?", likeCount: 12, date: { year: "2020.01.01", hour: "10:00:00 " } },
    { id: 2, message: "My first post", likeCount: 2, date: { year: "2020.01.01", hour: "10:00:00 " } },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.text;
      return state;
    case ADD_POST:
      if (state.newPostText === "") {
        return state;
      }
      const addNew = {
        id: 5,
        message: state.newPostText,
        likeCount: 0,
        date: {
          year: getNowDate("year"),
          hour: getNowDate("hour"),
        },
      };

      state.profilePost.unshift(addNew);
      state.newPostText = "";
      return state;

    default:
      return state;
  }
};

export const changeTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const addNewPostActionCreator = () => ({ type: ADD_POST });

export default profileReducer;
