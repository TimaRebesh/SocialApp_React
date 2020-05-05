import React from "react";
import s from "./preloader.module.css";
import preloader from "../../../../src/assets/svg/spinner.svg";

const Preloader = () => {
  return (
    <div className={s.container}>
      <img src={preloader} alt="" />
    </div>
  );
};

export default Preloader;
