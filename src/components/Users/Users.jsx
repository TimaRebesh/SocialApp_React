import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.png";

class Users extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then((res) => {
      this.props.setUsers(res.data.items);
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.props.users.map((u) => {
            return (
              <div key={u.id} className={s.content}>
                <div className={s.photo_button}>
                  <div className={s.photo}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="" />
                  </div>
                  <div>
                    {u.followed ? (
                      <button
                        onClick={() => {
                          this.props.unfollow(u.id);
                        }}
                      >
                        follow
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          this.props.follow(u.id);
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
  }
}

export default Users;
