import { REGISTER_USER, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "./actiontype"

export const registerUser = (user: any, navigate: any) => {
    return {
        type: REGISTER_USER,
        payload: {
            user,
            navigate
        }
    }
};

export const registerUserSuccess = (user: any) => {
    return {
        type: REGISTER_USER_SUCCESS,
        payload: user
    }
};

export const registerUserError = (error: any) => {
    return {
        type: REGISTER_USER_ERROR,
        payload: error
    }
}