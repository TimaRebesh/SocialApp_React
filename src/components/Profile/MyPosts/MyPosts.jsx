import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.postData.map((item) => {
    return <Post photo={item.photo} message={item.message} likeCount={item.likeCount} />;
  });
  return <div className={s.content}>{postElements}</div>;
};

export default MyPosts;
