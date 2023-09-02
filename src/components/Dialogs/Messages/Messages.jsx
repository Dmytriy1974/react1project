import s from './../Dialogs.module.css'

const Messages = (props) => {
    return <div className={s.messagesItem}>
            <div className={s.DimMessages}> {props.messDim}</div>
            <div className={s.ElseMessages}> {props.messElse}</div>
    </div>
}

export default Messages