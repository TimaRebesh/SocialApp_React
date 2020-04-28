import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Dialog from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  const dialogElements = props.dialogsPage.dialogsData.map((item) => {
    return <Dialog name={item.name} path={item.path} />;
  });

  const messageElements = props.dialogsPage.messagesData.map((item) => {
    return <Message message={item} />;
  });

  const onChangeText = (event) => {
    const text = event.target.value;
    props.changeText(text);
  };

  const addNewMessage = () => {
    props.newMessage();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>
        <div>{messageElements}</div>
        <div className={s.area_send_message}>
          <div>
            <textarea className={s.textarea} onChange={onChangeText} value={props.dialogsPage.newMessageText} cols="100" placeholder="enter your message"></textarea>
          </div>
          <div>
            <button className={s.button_send} onClick={addNewMessage}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
