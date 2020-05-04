import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import userPhoto from "../../../src/assets/images/user.png";

class Users extends React.Component {
  // fired when component created
  componentDidMount() {
    console.log("users created");
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  onPageChanged(currentNumber) {
    this.props.setCurrentPage(currentNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
    });
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize);
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
                      this.onPageChanged(p);
                    }}
                    className={this.props.currentPage === p ? s.current : null}
                  >
                    {p}
                  </button>
                );
              }
            })}
          </div>
        </div>

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
