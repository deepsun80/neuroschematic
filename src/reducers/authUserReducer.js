import { AUTH_USER } from '../actions';

export default (authUser = null, action) => {
    switch(action.type) {
        case AUTH_USER:
            return action.authUser;
        default:
            return authUser;
    }
};