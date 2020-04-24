import React from "react";
import s from "./Message.module.css";

const Message = (props) => {
  return (
    <div>
      <div className={s.message}>{props.message.message}</div>
      <p className={s.date}>
        <i className={s.dataHour}>{props.message.date.hour} </i>
      </p>
    </div>
  );
};

export default Message;
