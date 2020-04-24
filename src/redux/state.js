const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE";

const store = {
  _state: {
    profilePage: {
      profilePost: [
        { id: 1, message: "Hi, how are you?", likeCount: 12, date: { year: "2020.01.01", hour: "10:00:00 " } },
        { id: 2, message: "My first post", likeCount: 2, date: { year: "2020.01.01", hour: "10:00:00 " } },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    return "this variable will be change to function";
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  _getNowDate(turn) {
    const date = new Date();
    function addZeroToDate(num) {
      const numStr = String(num);
      if (numStr.length === 1) {
        return "0" + numStr;
      }
      return numStr;
    }
    if (turn === "hour") {
      return addZeroToDate(date.getHours()) + ":" + addZeroToDate(date.getMinutes()) + ":" + addZeroToDate(date.getSeconds());
    } else if (turn === "year") {
      return date.getFullYear() + ".0" + (date.getMonth() + 1) + "." + addZeroToDate(date.getDate());
    }
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const addNew = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
        date: {
          year: this._getNowDate("year"),
          hour: this._getNowDate("hour"),
        },
      };
      this._state.profilePage.profilePost.unshift(addNew);
      this._state.profilePage.newPostText = "and next post ";
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber();
    } else if (action.type === ADD_MESSAGE) {
      if (this._state.dialogsPage.newMessageText === "") {
        return;
      }
      const addNew = {
        id: 4,
        message: this._state.dialogsPage.newMessageText,
        date: {
          year: this._getNowDate("year"),
          hour: this._getNowDate("hour"),
        },
      };
      this._state.dialogsPage.messagesData.push(addNew);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber();
    }
  },
};

export const changeTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const addNewPostActionCreator = () => ({ type: ADD_POST });
export const changeTextMessageCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });
export const addNewMessageCreator = () => ({ type: ADD_MESSAGE });

export default store;
