const store = {
  _state: {
    profilePage: {
      profilePost: [
        { id: 1, message: "Hi, how are you?", likeCount: 12 },
        { id: 2, message: "My first post", likeCount: 2 },
        { id: 3, message: "My second post", likeCount: 100 },
        { id: 4, message: "My second post", likeCount: 22 },
        { id: 5, message: "My second post", likeCount: 3 },
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
  _callSubscriber: false,
  addPost() {
    const addNew = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likeCount: 0,
    };
    this._state.profilePage.profilePost.unshift(addNew);
    this._state.profilePage.newPostText = "and next post ";
    this._callSubscriber();
  },
  updateNewPostText(text) {
    this._state.profilePage.newPostText = text;
    this._callSubscriber();
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
