import { addMessageCreateAction, updateMsgChangeCreateAction } from '../../redax/dialogs-reduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMsgChange: (text) => { dispatch(updateMsgChangeCreateAction(text)) },
        addMessage: () => { dispatch(addMessageCreateAction()) }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer
