import React from "react"
import s from './Users.module.css'
import userPhoto from '../../../src/assets/images/userImg.png'
import { NavLink } from "react-router-dom"
import axios from "axios"


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={s.users}>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChange(p) }}>{p}</span>

                })}

            </div>


            {props.users.map(u => <div key={u.id}>
                <div>
                    <span>

                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                            </NavLink>

                        </div>
                        <div>
                            <span>
                                {u.followed ? <button onClick={() => {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/{u.id}`, {
                                        withCredentials: true,
                                        headers: { "API-KEY": "ea843934-577f-4e93-9f11-fb9f43afd3a2" }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode == 0)
                                                props.unfollow(u.id)
                                        })
                                }}> Unfollow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/{u.id}`, {},
                                            {
                                                withCredentials: true,
                                                headers: { "API-KEY": "ea843934-577f-4e93-9f11-fb9f43afd3a2" }
                                            }).then(response => {
                                                if (response.data.resultCode == 0)
                                                    props.follow(u.id)
                                            })
                                    }} >Follow</button>}

                                {u.name} {u.status}
                                <span>
                                    {'u.location.country'}
                                    <div> {'u.location.city'}</div>
                                </span>
                            </span>

                        </div>
                    </span>
                </div>

            </div>
            )
            }
        </div>
    )
}

export default Users