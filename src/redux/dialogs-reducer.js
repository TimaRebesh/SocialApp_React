const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

const dialogsReducer = (state, action, getNowDate) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case ADD_MESSAGE:
      if (state.newMessageText === "") {
        return state;
      }
      const addNew = {
        id: 4,
        message: state.newMessageText,
        date: {
          year: getNowDate("year"),
          hour: getNowDate("hour"),
        },
      };
      state.messagesData.push(addNew);
      state.newMessageText = "";
      return state;
    default:
      return state;
  }
};

export const changeTextMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });
export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;
