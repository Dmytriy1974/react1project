
import React from 'react'
import s from './Users.module.css'
let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU",
                followed: true,
                fullName: "Dmytrij",
                status: "I am a boss",
                location: { country: "Ukraine", city: "Uzhgorod" },
            },
            {
                id: 2,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU",
                followed: false,
                fullName: "Sasha",
                status: "I am a boss too",
                location: { country: "Ukraine", city: "Lviv" },
            },
            {
                id: 3,
                avatarUrl:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU",
                followed: false,
                fullName: "Victor",
                status: "I am not a boss",
                location: { country: "USA", city: "Vashington" },
            },
        ])
    }
    return (
        <div className={s.users}>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <span>

                        <div>
                            <img src={u.avatarUrl} />
                        </div>
                        <div>
                            {
                                u.followed ? <button onClick={() => { props.follow(u.id) }}>Unfollow</button> :
                                    <button onClick={() => { props.unfollow(u.id) }} >Follow</button>
                            }

                        </div>
                        <div>{u.fullName} </div>
                        <div>{u.status} </div>
                        <div>{u.location.country} </div>
                        <div>{u.location.city} </div>
                    </span>
                </div>


            </div>
            )
            }
        </div>
    )
}
export default Users