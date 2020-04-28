import React from "react";
import Dialogs from "./Dialogs";
import { changeTextMessageCreator, addNewMessageCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {
  const state = props.store.getState();

  const changeText = (text) => {
    props.store.dispatch(changeTextMessageCreator(text));
  };

  const newMessage = () => {
    props.store.dispatch(addNewMessageCreator());
  };

  return <Dialogs dialogsPage={state.dialogsPage} changeText={changeText} newMessage={newMessage} />;
};

export default DialogsContainer;
