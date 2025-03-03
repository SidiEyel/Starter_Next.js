import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS } from "./actiontype"

const INIT_STATE = {
    loading: false,
    user: null,
}

const login = (state = INIT_STATE, action: any) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false };
        case LOGIN_USER_ERROR:
            return { ...state, loading: false }; 
        case LOGOUT_USER:
            return { ...state, loading: true };
        case LOGOUT_USER_SUCCESS:
            return { ...state, loading: false };
        case LOGOUT_USER_ERROR:
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default login;