import React from "react";
// import s from "./Profile.module.css";
import PostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <PostsContainer />
    </div>
  );
};

export default Profile;
