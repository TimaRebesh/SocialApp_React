import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.posts.profilePost.map((item) => {
    return <Post photo={item.photo} message={item.message} likeCount={item.likeCount} date={item.date} />;
  });

  const newPostElement = React.createRef();

  const changeText = () => {
    const text = newPostElement.current.value;
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  const addNewPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={changeText} value={props.newPostText} cols="50" rows="5" />
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
