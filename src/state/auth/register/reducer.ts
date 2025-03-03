import { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "./actiontype"

const INIT_STATE = {
    loading: false,
}

const register = (state = INIT_STATE, action: any) => {
    switch(action.type) {
        case REGISTER_USER:
            return { ...state, loading: true };
        case REGISTER_USER_SUCCESS:
            return { ...state, loading: false };
        case REGISTER_USER_ERROR:
            return { ...state, loading: false };
        default:
            state = { ...state };
            break;
    }
    return state;
}

export default register;