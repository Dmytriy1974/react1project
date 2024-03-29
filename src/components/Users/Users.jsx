import React from "react"
import s from './Users.module.css'
import userPhoto from '../../../src/assets/images/userImg.png'
import { NavLink } from "react-router-dom"


let Users = (props) => {
    console.log(props.followingInProgress)
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
                                {u.followed ? <button disabled={props.followingInProgress.some(idi => idi === u.id)}
                                    onClick={() => {
                                        props.unfollow(u.id)

                                    }}> Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(idi => idi === u.id)}
                                        onClick={() => {
                                            props.follow(u.id)
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