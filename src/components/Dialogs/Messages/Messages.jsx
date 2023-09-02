import s from './../Dialogs.module.css'
const Messages = (props) => {
    debugger
    <div className={s.messagesItem}>
    return (<div>
        <div className={s.DimMessages}> {props.messDim}</div>
        <div className={s.ElseMessages}> {props.messElse}</div>
    </div>
    )
</div>

}
export default Messages