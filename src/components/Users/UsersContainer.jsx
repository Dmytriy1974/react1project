import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setFetching, setTotalUsersCount, setUsers, unfollow } from "../../redax/users-reduser";
import Users from "./Users";
import axios from 'axios';
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true }).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        })
    }

    onPageChange = (pageNumber) => {
        this.props.setFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true } ).then(response => {
            this.props.setFetching(false)
            this.props.setUsers(response.data.items);
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
                unfollow={this.props.unfollow} />
        </>


    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return 
// }

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setFetching
})(UsersContainer)
