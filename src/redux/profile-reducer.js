const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action, getNowDate) => {
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
