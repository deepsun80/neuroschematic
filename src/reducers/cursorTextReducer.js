import { SET_CURSOR_TEXT_OPACITY, REMOVE_CURSOR_TEXT_OPACITY } from '../actions';

export default (cursorTextOpacity = 0, action) => {
    switch(action.type) {
        case SET_CURSOR_TEXT_OPACITY:
            cursorTextOpacity = 1.0;
            return cursorTextOpacity;
        case REMOVE_CURSOR_TEXT_OPACITY:
            cursorTextOpacity = 0;
            return cursorTextOpacity;
        default:
            return cursorTextOpacity;
    }
};