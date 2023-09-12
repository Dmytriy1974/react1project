import React from 'react'
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom'
import Messages from './Messages/Messages'
import AbonentsItem from './AbonentsItem/AbonentsItem'
const Dialogs = (props) => {

    let dialogsElements = props.state.abonentData.map(abonent => <AbonentsItem name={abonent.name} id={abonent.id} img={abonent.img} />)
    const messagesElementsDim = props.state.messagesData.filter(mesg => mesg.fromDim === true)
    const messagesElementsElse = props.state.messagesData.filter(mesg => mesg.fromDim === false)

    // let messagesElements = props.state.messagesData.map(mesg => <Messages message={mesg.message} />)
    // return (
    //     <div className={s.dialogs}>
    //         <div className={s.abonents}>
    //            {dialogsElements}
    //         </div>

    //         <div className={s.messages}>
    //             {messagesElements}
    //         </div>
    //     </div>

    // )

    let listDimMessage = messagesElementsDim.map(mesg => <Messages messDim={mesg.message} />)
    let listElseMessage = messagesElementsElse.map(mesg => <Messages messElse={mesg.message} />)

    let newMsgElement = React.createRef()
    let addMessage = () => {
        let text = newMsgElement.current.value
        props.addMessagesData(text)
        props.updateMsgChange('')

    }
    let onMsgChange = () => {
        let text = newMsgElement.current.value
        props.updateMsgChange(text)
    }

    return (

        <div className={s.dialogs}>

            <div className={s.abonents}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {listDimMessage}
                {listElseMessage}
            </div>
            <div>
                <div>
                    <textarea onChange={onMsgChange} ref={newMsgElement} value={props.state.newMsgText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>

        </div>

    )

}
export default Dialogs