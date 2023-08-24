import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.abonents}>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/1" className={ ({isActive})=> isActive? s.active : ''}> Dimych</NavLink>
                </div>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/2"> Andrey</NavLink>
                </div>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/3"> Sveta</NavLink>
                </div>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/4"> Sasha</NavLink>
                </div>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/5"> Victor</NavLink>
                </div>
                <div className={s.abonentsItem}>
                    <NavLink to="/dialogs/6"> Valera</NavLink>
                </div>

            </div>

            <div className={s.messages}>
                <div className={s.messagesItem}> Hi</div>
                <div className={s.messagesItem}> How are you?</div>
                <div className={s.messagesItem}> How its going?</div>
            </div>
        </div>

    )
}
export default Dialogs