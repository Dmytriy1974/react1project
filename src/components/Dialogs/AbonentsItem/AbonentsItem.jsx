import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const AbonentsItem = (props) => {
    return (
        <div className={s.abonentsItem}>
            <NavLink to={"/dialogs/" + props.id} className={({ isActive }) =>
                isActive ? s.active : ''}> {props.name}</NavLink>
        </div>
    )
}
export default AbonentsItem