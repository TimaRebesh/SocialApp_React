import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          <img src="https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/19339625881548233621-512.png" alt="" />
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/message" activeClassName={s.activeLink}>
          <img src="https://cdn0.iconfinder.com/data/icons/ui-essential-3/32/Send_Mail-512.png" alt="" />
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          <img src="https://www.iconpacks.net/icons/1/free-users-icon-267-thumb.png" alt="" />
          Users
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>
          <img src="https://vchcso.ru/site/img/news/news27_42521.png" alt="" />
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/music" activeClassName={s.activeLink}>
          <img src="https://cdn4.iconfinder.com/data/icons/jumpicon-entertainment-line-1/32/-_Listen-Music-Headphone-Listening-Audio-Headset-512.png" alt="" />
          Music
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/settings" activeClassName={s.activeLink}>
          <img src="https://img.icons8.com/ios/500/settings.png" alt="" />
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
