import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const postData = [
  { id: 1, message: "Hi, how are you?", likeCount: 12, photo: "https://i12.photobucket.com/albums/a212/obiwandoodle/U2%20Bono%20POP/bwbonopopglassesACSanFran6-97.jpg" },
  { id: 2, message: "My first post", likeCount: 2, photo: "https://cs21.babysfera.ru/b/a/5/1/77061456.140277710.jpeg" },
  { id: 3, message: "My second post", likeCount: 100, photo: "https://img-fotki.yandex.ru/get/4125/78716754.84/0_d3759_ec05ecce_orig" },
  { id: 4, message: "My second post", likeCount: 22, photo: "https://topovik.com/wp-content/uploads/2018/02/maxresdefault.jpg" },
  { id: 5, message: "My second post", likeCount: 3, photo: "https://knowhistory.ru/sites/default/files/styles/event/public/images/i_1_50.jpg?itok=I1010Uc6" },
];

const dialogData = [
  { id: 1, name: "Bono", path: 1 },
  { id: 2, name: "Age", path: 2 },
  { id: 3, name: "Rick", path: 3 },
  { id: 4, name: "Lena", path: 4 },
  { id: 5, name: "Kate", path: 5 },
];

const messageData = [
  { id: 1, message: "Hi" },
  { id: 1, message: "How are you?" },
  { id: 1, message: "I am fine" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogData={dialogData} messageData={messageData} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
