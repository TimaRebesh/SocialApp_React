const store = {
  _state: {
    profilePage: {
      profilePost: [
        { id: 1, message: "Hi, how are you?", likeCount: 12, date: { year: "2020", hour: "00:00 " } },
        { id: 2, message: "My first post", likeCount: 2, date: { year: "2020", hour: "00:00 " } },
      ],
      newPostText: "new post",
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
        { id: 1, message: "Hi" },
        { id: 1, message: "How are you?" },
        { id: 1, message: "I am fine" },
      ],
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

  dispatch(action) {
    if (action.type === "ADD-POST") {
      const date = new Date();
      const addNew = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likeCount: 0,
        date: {
          year: date.getFullYear() + ".0" + (date.getMonth() + 1) + "." + date.getDate(),
          hour: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + " ",
        },
      };
      debugger;
      this._state.profilePage.profilePost.unshift(addNew);
      this._state.profilePage.newPostText = "and next post ";
      this._callSubscriber();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.text;
      this._callSubscriber();
    }
  },
};

export default store;
