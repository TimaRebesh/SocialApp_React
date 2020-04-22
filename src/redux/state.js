import { renderEntireTree } from "../render";

const state = {
  profileData: {
    profilePost: [
      { id: 1, message: "Hi, how are you?", likeCount: 12 },
      { id: 2, message: "My first post", likeCount: 2 },
      { id: 3, message: "My second post", likeCount: 100 },
      { id: 4, message: "My second post", likeCount: 22 },
      { id: 5, message: "My second post", likeCount: 3 },
    ],
    textareaText: "new post",
    changeText: function (text) {
      this.textareaText = text;
      renderEntireTree(state);
    },
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
};

export const addToProfile = () => {
  const addNew = {
    id: 5,
    message: state.profileData.textareaText,
    likeCount: 0,
  };
  state.profileData.profilePost.unshift(addNew);
  state.profileData.textareaText = "";
  renderEntireTree(state);
};

export default state;