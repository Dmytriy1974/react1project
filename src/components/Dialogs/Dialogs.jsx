import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Messages from './Messages/Messages'
import AbonentsItem from './AbonentsItem/AbonentsItem'
const Dialogs = (props) => {
    let abonentData = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }]

    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' },
        { id: 3, message: 'How its going?' }]

    let dialogsElements = abonentData.map(abonent => <AbonentsItem name={abonent.name} id={abonent.id} /> )
    let messagesElements = messagesData.map(mesg => <Messages message={mesg.message} />)
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