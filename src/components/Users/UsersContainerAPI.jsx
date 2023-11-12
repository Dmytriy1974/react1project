
import React from 'react'
import s from './Users.module.css'
import axios from 'axios'
import userPhoto from '../../../src/assets/images/userImg.png'
import Users from './Users';

class UsersContainerAPI extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);

        })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })

    }
    render() {
        return <Users totalUsersCount={this.props.totalUsersCount} 
        pageSize={this.props.pageSize}
    currentPage={this.props.currentPage}  
    onPageChange= {this.onPageChange} 
    users ={this.props.users} 
    follow={this.props.follow} 
    unfollow={this.props.unfollow} />           
        
        }
        }



export default UsersContainerAPI