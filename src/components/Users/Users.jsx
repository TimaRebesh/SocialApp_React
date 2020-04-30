import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  return (
    <div>
      {props.users.map((u) => {
        return (
          <div key={u.id} className={s.content}>
            <div className={s.photo_button}>
              <div className={s.photo}>
                <img src={u.photo} alt="" />
              </div>
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(u.id);
                    }}
                  >
                    follow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(u.id);
                    }}
                  >
                    unfollow
                  </button>
                )}
              </div>
            </div>
            <div className={s.info}>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
