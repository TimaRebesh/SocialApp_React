import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <section className={s.content}>
      <img src={props.photo} alt=""></img>
      {props.message}
      <div>
        <button>like {props.likeCount}</button>
      </div>
    </section>
  );
};

export default Post;
