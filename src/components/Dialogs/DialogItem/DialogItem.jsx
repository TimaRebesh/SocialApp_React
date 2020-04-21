import React from "react";
import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.css";

const Dialog = (props) => {
  const path = "/message/" + props.path;
  return (
    <div className={s.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
