import { connect } from "react-redux";
import MyPosts from "./MyPosts";
import { changeTextActionCreator, addNewPostActionCreator } from "../../../redux/profile-reducer";

const mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postChangeText: (text) => {
      dispatch(changeTextActionCreator(text));
    },
    addPost: () => {
      dispatch(addNewPostActionCreator());
    },
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default PostsContainer;
