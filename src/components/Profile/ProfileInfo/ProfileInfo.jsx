import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/preloader/preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.photo}>
        <img src="https://cdn.cjr.org/wp-content/uploads/2019/07/AdobeStock_100000042-e1563305717660-686x371.jpeg" alt=""></img>
      </div>
    </div>
  );
};

export default ProfileInfo;
