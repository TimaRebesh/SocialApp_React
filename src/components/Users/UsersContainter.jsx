import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC, setPageAC, setTotalCountAC, togglePreloaderPngAC } from "../../redux/users-reducer";

import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  // fired when component created
  componentDidMount() {
    console.log("users created");
    this.props.togglePreloaderPNG(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.togglePreloaderPNG(false);
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  onPageChanged = (currentNumber) => {
    this.props.togglePreloaderPNG(true);
    this.props.setCurrentPage(currentNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.togglePreloaderPNG(false);
      this.props.setUsers(res.data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users onPageChanged={this.onPageChanged} store={this.props} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userID) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID) => {
      dispatch(unFollowAC(userID));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (num) => {
      dispatch(setPageAC(num));
    },
    setUsersTotalCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    togglePreloaderPNG: (toggle) => {
      dispatch(togglePreloaderPngAC(toggle));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
