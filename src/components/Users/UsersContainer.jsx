import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import { follow, unFollow, setUsers, setCurrentPage, setTotalCount, togglePreloaderPng } from "../../redux/users-reducer";

import Preloader from "../common/preloader/preloader";

class UsersContainer extends React.Component {
  // fired when component created
  componentDidMount() {
    console.log("users created");
    this.props.togglePreloaderPng(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.togglePreloaderPng(false);
      this.props.setUsers(res.data.items);
      this.props.setTotalCount(res.data.totalCount);
    });
  }

  onPageChanged = (currentNumber) => {
    this.props.togglePreloaderPng(true);
    this.props.setCurrentPage(currentNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.togglePreloaderPng(false);
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

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  togglePreloaderPng,
})(UsersContainer);
