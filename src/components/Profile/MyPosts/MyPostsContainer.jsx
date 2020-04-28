import React from "react";
import { changeTextActionCreator, addNewPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const postChangeText = (text) => {
    props.store.dispatch(changeTextActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addNewPostActionCreator());
  };

  return <MyPosts profilePage={state.profilePage} postChangeText={postChangeText} addPost={addPost} newPostText={state.profilePage.newPostText} />;
};

export default MyPostsContainer;
