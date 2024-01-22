import React from "react";
import {connect} from "react-redux";
import {
  follow,
  followProgress,
  getUsersThunk,
  setCurrentPage,
  setFetching,
  setTotalUsersCount,
  setUsers,
  unfollow
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
    this.props.setFetching(true)
    this.props.setCurrentPage(pageNumber);
    this.props.getUsersThunk({pageNumber, pageSize: this.props.pageSize})

    // userApi.getUsers().then(data => {
    //   this.props.setFetching(false)
    //   this.props.setUsers(data.items);
    // })
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
        follow={this.props.follow.bind(this)}
        unfollow={this.props.unfollow.bind(this)}
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
const mapDispatchToProps = (dispatch) => {
  return {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setFetching,
    followProgress,
    getUsersThunk
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

