import { OPEN_INFO_MODAL, CLOSE_INFO_MODAL } from '../actions';

export default (infoModalState = false, action) => {
    switch(action.type) {
        case OPEN_INFO_MODAL:
            return action.payload;
        case CLOSE_INFO_MODAL:
            return action.payload;
        default:
            return infoModalState;
    }
};