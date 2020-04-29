import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postElements = props.profilePage.profilePost.map((item) => {
    return <Post photo={item.photo} message={item.message} likeCount={item.likeCount} date={item.date} key={item.id} />;
  });

  const newPostElement = React.createRef();

  const onChangeText = () => {
    const text = newPostElement.current.value;
    props.postChangeText(text);
  };

  const addNewPost = () => {
    props.addPost();
  };

  return (
    <div className={s.content}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} onChange={onChangeText} value={props.newPostText} placeholder="add new post" cols="50" rows="5" />
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
