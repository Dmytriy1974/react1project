import { compose } from 'redux'
import { withNavigate } from '../../hoc/withAuthRedirectComponent'
import { addMessageCreateAction, updateMsgChangeCreateAction } from '../../redax/dialogs-reduser'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMsgChange: (text) => { dispatch(updateMsgChangeCreateAction(text)) },
        addMessage: () => { dispatch(addMessageCreateAction()) }
    }
}

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withNavigate
) (Dialogs)

