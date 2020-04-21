import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  const dialogElements = props.dialogData.map((item) => {
    return <Dialog name={item.name} path={item.path} />;
  });

  const messageElements = props.messageData.map((item) => {
    return <Message text={item.message} />;
  });
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className="messages">{messageElements}</div>
    </div>
  );
};

export default Dialogs;
