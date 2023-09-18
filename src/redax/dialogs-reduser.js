export const addMessageCreateAction = () => ({ type: ADD_MESSAGES_DATA });
export const updateMsgChangeCreateAction = (text) => ({
  type: UPDATE_MSG_CHANGE,
  inputChng: text,
});
const ADD_MESSAGES_DATA = "ADD-MESSAGES-DATA";
const UPDATE_MSG_CHANGE = "UPDATE-MSG-CHANGE";

const dialogsReduser = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGES_DATA:
      let newMsg = {
        fromDim: false,
        id: 4,
        message: state.newMsgText,
      };
      state.messagesData.push(newMsg);
      state.newMsgText = "";
      return state;

    case UPDATE_MSG_CHANGE:
      state.newMsgText = action.inputChng;
      return state;

    default:
      return state;
  }

};
export default dialogsReduser;
