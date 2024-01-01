import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setFetching, setTotalUsersCount, setUsers, unfollow, followProgress } from "../../redax/users-reduser";
import Users from "./Users";
import axios from 'axios';
import Preloader from "../common/Preloader/Preloader";
import { userApi } from "../../api/api";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setFetching(true)
        userApi.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);

        })
    }

    onPageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber);
        userApi.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setFetching(false)
            this.props.setUsers(data.items);
        })

    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followProgress={this.props.followProgress}
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
debugger
// const mapDispatchToProps = (dispatch) => {
//     return 
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching, followProgress
})(UsersContainer)
