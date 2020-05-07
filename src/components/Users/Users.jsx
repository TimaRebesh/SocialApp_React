import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../../src/assets/images/user.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const pagesCount = Math.ceil(props.store.totalUserCount / props.store.pageSize);
  let pagesNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    if (i === 5) {
      pagesNumbers.push("gap");
    } else if (i < 5 || i > pagesCount - 4) {
      pagesNumbers.push(i);
    }
  }

  return (
    <div>
      <div className={s.pagination}>
        <div>Pages</div>
        <div>
          {pagesNumbers.map((p) => {
            if (p === "gap") {
              return <span className={s.gap}>.........</span>;
            } else {
              return (
                <button
                  onClick={(e) => {
                    props.onPageChanged(p);
                  }}
                  className={props.store.currentPage === p ? s.current : null}
                >
                  {p}
                </button>
              );
            }
          })}
        </div>
      </div>

      <div>
        {props.store.users.map((u) => {
          return (
            <div key={u.id} className={s.content}>
              <div className={s.photo_button}>
                <div className={s.photo}>
                  <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                  </NavLink>
                </div>
                <div>
                  {u.followed ? (
                    <button
                      onClick={() => {
                        props.store.unFollow(u.id);
                      }}
                    >
                      follow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.store.follow(u.id);
                      }}
                    >
                      unfollow
                    </button>
                  )}
                </div>
              </div>
              <div className={s.info}>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
