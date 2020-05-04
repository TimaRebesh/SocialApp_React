import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unFollowAC, setUsersAC, setPageAC, setTotalCountAC } from "../../redux/users-reducer";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
