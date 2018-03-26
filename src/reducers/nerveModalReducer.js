import { OPEN_NERVE_MODAL, CLOSE_NERVE_MODAL } from '../actions';

export default (nerveModalState = false, action) => {
    switch(action.type) {
        case OPEN_NERVE_MODAL:
            return action.payload;
        case CLOSE_NERVE_MODAL:
            return action.payload;
        default:
            return nerveModalState;
    }
};