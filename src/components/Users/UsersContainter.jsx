import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC, setPageAC, setTotalCountAC } from "../../redux/users-reducer";

class UsersContainer extends React.Component {
  // fired when component created
  componentDidMount() {
    console.log("users created");
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
      this.props.setUsersTotalCount(res.data.totalCount);
    });
  }

  onPageChanged = (currentNumber) => {
    this.props.setCurrentPage(currentNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentNumber}&count=${this.props.pageSize}`).then((res) => {
      this.props.setUsers(res.data.items);
    });
  };

  render() {
    return <Users onPageChanged={this.onPageChanged} store={this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUserCount: state.usersPage.totalUserCount,
    currentPage: state.usersPage.currentPage,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
