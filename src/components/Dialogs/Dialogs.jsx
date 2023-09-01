import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Messages from './Messages/Messages'
import AbonentsItem from './AbonentsItem/AbonentsItem'
const Dialogs = (props) => {

    let dialogsElements = props.state.abonentData.map(abonent => <AbonentsItem name={abonent.name} id={abonent.id} img={abonent.img}/> )
    let messagesElements = props.state.messagesData.map(mesg => <Messages message={mesg.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.abonents}>
               {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>

    )
}
export default Dialogs