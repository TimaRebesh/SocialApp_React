import getNowDate from "./nowDate";

const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

const initialState = {
  dialogsData: [
    { id: 1, name: "Bono", path: 1 },
    { id: 2, name: "Age", path: 2 },
    { id: 3, name: "Rick", path: 3 },
    { id: 4, name: "Lena", path: 4 },
    { id: 5, name: "Kate", path: 5 },
  ],
  messagesData: [
    { id: 1, message: "Hi", date: { year: "2020.01.01", hour: "10:00:00 " } },
    { id: 2, message: "How are you?", date: { year: "2020.01.01", hour: "10:00:00 " } },
    { id: 3, message: "I am fine", date: { year: "2020.01.01", hour: "10:00:00 " } },
  ],
  newMessageText: "",
};

let count = 10;

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText: action.text,
      };

    case ADD_MESSAGE:
      if (state.newMessageText === "") {
        return state;
      }
      const text = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messagesData: [
          ...state.messagesData,
          {
            id: count++,
            message: text,
            date: {
              year: getNowDate("year"),
              hour: getNowDate("hour"),
            },
          },
        ],
      };
    default:
      return state;
  }
};

export const changeTextMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });
export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });

export default dialogsReducer;
