import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, unfollowAC } from "../../redax/users-reduser";
import Users from "./UsersContainerAPI";
import UsersContainerAPI from "./UsersContainerAPI";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => { dispatch(followAC(userId)) },
        unfollow: (userId) => { dispatch(unfollowAC(userId)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
        setTotalUsersCount: (totalUsers) => { dispatch(setTotalUsersCountAC(totalUsers)) }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI)
export default UsersContainer
