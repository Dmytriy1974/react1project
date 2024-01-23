import React from "react";
import { connect } from "react-redux";
import {
  follow,
  followProgress,
  getUsersThunk,
  setCurrentPage, unfollow
} from "../../redax/users-reduser";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUsersThunk()
  }

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunk({pageNumber, pageSize: this.props.pageSize})

    
  }

  render() {
    console.log('render', this.props)
    return <>
            {this.props.isFetching ? <Preloader/> : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChange={this.onPageChange}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        followProgress={this.props.followProgress}
        followingInProgress={this.props.followingInProgress}
      />
        </>


  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}
const mapDispatchToProps =  {
     follow,
    unfollow,
    setCurrentPage,
    followProgress,
    getUsersThunk
    };


export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  followProgress,
  getUsersThunk
})(UsersContainer)

