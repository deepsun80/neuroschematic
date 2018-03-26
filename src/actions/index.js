export const SELECTED_NERVE = 'SELECTED_NERVE';
export const SELECTED_ENTRAPMENT = 'SELECTED_ENTRAPMENT';
export const OPEN_NERVE_MODAL = 'OPEN_NERVE_MODAL';
export const CLOSE_NERVE_MODAL = 'CLOSE_NERVE_MODAL';
export const SET_CURSOR_OPACITY = 'SET_CURSOR_OPACITY';
export const SET_CURSOR_TEXT_OPACITY = 'SET_CURSOR_TEXT_OPACITY';
export const REMOVE_CURSOR_OPACITY = 'REMOVE_CURSOR_OPACITY';
export const REMOVE_CURSOR_TEXT_OPACITY = 'REMOVE_CURSOR_TEXT_OPACITY';
export const OPEN_INFO_MODAL = 'OPEN_INFO_MODAL';
export const CLOSE_INFO_MODAL = 'CLOSE_INFO_MODAL';
export const OPEN_DEMO_MODAL = 'OPEN_DEMO_MODAL';
export const CLOSE_DEMO_MODAL = 'CLOSE_DEMO_MODAL';
export const AUTH_USER = 'AUTH_USER';

export const setUser = (authUser) => {
    return {
        type: AUTH_USER,
        authUser
    };
}

export const selectNerve = (nerve) => {
    return {
        type: SELECTED_NERVE,
        nerve
    };
}

export const selectEntrapment = (entrapmentPoint) => {
    return {
        type: SELECTED_ENTRAPMENT,
        entrapmentPoint   
    };
}

export const openNerveModal = () => {
    return {
        type: OPEN_NERVE_MODAL,
        payload: true
    };
}

export const closeNerveModal = () => {
    return {
        type: CLOSE_NERVE_MODAL,
        payload: false
    };
}

export const openInfoModal = () => {
    return {
        type: OPEN_INFO_MODAL,
        payload: true
    };
}

export const closeInfoModal = () => {
    return {
        type: CLOSE_INFO_MODAL,
        payload: false
    };
}

export const setCursorOpacity = () => {
    return {
        type: SET_CURSOR_OPACITY
    };
}

export const removeCursorOpacity = () => {
    return {
        type: REMOVE_CURSOR_OPACITY
    };
}

export const setCursorTextOpacity = () => {
    return {
        type: SET_CURSOR_TEXT_OPACITY
    };
}

export const removeCursorTextOpacity = () => {
    return {
        type: REMOVE_CURSOR_TEXT_OPACITY
    };
}

export const openDemoModal = () => {
    return {
        type: OPEN_DEMO_MODAL,
        payload: true
    };
}

export const closeDemoModal = () => {
    return {
        type: CLOSE_DEMO_MODAL,
        payload: false
    };
}