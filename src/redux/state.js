import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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

  getNowDate(turn) {
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
    this._state.profilePage = profileReducer(this._state.profilePage, action, this.getNowDate);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action, this.getNowDate);
    this._callSubscriber();
  },
};

export default store;
