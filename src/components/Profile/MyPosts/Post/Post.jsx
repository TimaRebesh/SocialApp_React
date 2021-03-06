import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <section className={s.content}>
      <img src="https://i12.photobucket.com/albums/a212/obiwandoodle/U2%20Bono%20POP/bwbonopopglassesACSanFran6-97.jpg" alt=""></img>
      {props.message}
      <div>
        <button>like {props.likeCount}</button>
        <p className={s.date}>
          <i className={s.dataHour}>{props.date.hour} </i>
          {props.date.year}
        </p>
      </div>
    </section>
  );
};

export default Post;
