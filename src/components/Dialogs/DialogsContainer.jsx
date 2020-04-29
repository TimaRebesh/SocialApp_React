import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { changeTextMessageCreator, addNewMessageCreator } from "../../redux/dialogs-reducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => {
      dispatch(changeTextMessageCreator(text));
    },
    newMessage: () => {
      dispatch(addNewMessageCreator());
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
