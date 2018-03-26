import { OPEN_DEMO_MODAL, CLOSE_DEMO_MODAL } from '../actions';

export default (demoModalState = false, action) => {
    switch(action.type) {
        case OPEN_DEMO_MODAL:
            return action.payload;
        case CLOSE_DEMO_MODAL:
            return action.payload;
        default:
            return demoModalState;
    }
};