import React from 'react'
import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import AbonentsItem from './AbonentsItem/AbonentsItem'


const Dialogs = (props) => {
    let dialogsElements = props.messagesPage.abonentData.map(abonent => <AbonentsItem name={abonent.name} key={abonent.id} id={abonent.id} img={abonent.img} />)
    const messagesElementsDim = props.messagesPage.messagesData.filter(mesg => mesg.fromDim === true)
    const messagesElementsElse = props.messagesPage.messagesData.filter(mesg => mesg.fromDim === false)



    let listDimMessage = messagesElementsDim.map(mesg => <Messages key={mesg.id} messDim={mesg.message} />)
    let listElseMessage = messagesElementsElse.map(mesg => <Messages key={mesg.id} messElse={mesg.message} />)

    let newMsgElement = React.createRef()
    let onAddMessage = () => {

        // let text = newMsgElement.current.value
        props.addMessage()

    }
    let onMsgChange = () => {
        let text = newMsgElement.current.value
        props.updateMsgChange(text)
    }
    debugger
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
                    <textarea onChange={onMsgChange} ref={newMsgElement} value={props.messagesPage.newMsgText} />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>

        </div>

    )

}
export default Dialogs