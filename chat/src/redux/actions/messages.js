import { messagesApi } from "../../utils/api"

const actions = {
    setMessages: items => ({
        type: "MESSAGES:SET_ITEMS",
        payload: items
    }),
    fetchDialogs: (dialogId) => dispatch => {
        messagesApi.getAllByDialogId(dialogId).then(({data})=>{
            dispatch(actions.setDialogs(data));
        });
    }
};
export default actions