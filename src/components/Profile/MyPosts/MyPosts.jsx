import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.postData.map((item) => {
    return <Post photo={item.photo} message={item.message} likeCount={item.likeCount} />;
  });

  const newPostElement = React.createRef();

  const addNewPost = () => {
    const text = newPostElement.current.value;
    props.addToProfile(text);
    newPostElement.current.value = "";
  };

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} cols="50" rows="5"></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add new post</button>
        </div>
      </div>
      <div>{postElements}</div>
    </div>
  );
};

export default MyPosts;
