import s from './Dialogs.module.css'
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.abonents}>
                <div className={s.abonentsItem}>
                <NavLink to="/dialogs/1"> Dimych</NavLink>
                </div>
                <div className={s.abonentsItem}> Andrey</div>
                <div className={s.abonentsItem}> Sveta</div>
                <div className={s.abonentsItem}> Sasha</div>
                <div className={s.abonentsItem}> Victor </div>
                <div className={s.abonentsItem}>Valera </div>
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