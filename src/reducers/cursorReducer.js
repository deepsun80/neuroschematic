import { SET_CURSOR_OPACITY, REMOVE_CURSOR_OPACITY } from '../actions';

export default (cursorOpacity = 0, action) => {
    switch(action.type) {
        case SET_CURSOR_OPACITY:
            cursorOpacity = 1.0;
            return cursorOpacity;
        case REMOVE_CURSOR_OPACITY:
            cursorOpacity = 0;
            return cursorOpacity;
        default:
            return cursorOpacity;
    }
};