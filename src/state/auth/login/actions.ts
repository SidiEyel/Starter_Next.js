import { LOGIN_USER, LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, LOGOUT_USER, LOGOUT_USER_ERROR, LOGOUT_USER_SUCCESS } from "./actiontype"

export const loginUser = (user: any, navigate: any, redirectTo: any) => ({
    type: LOGIN_USER,
    payload: {
        user,
        navigate,
        redirectTo
    }
});
export const loginUserSuccess = (user: any) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});
export const loginUserError = (error: any) => ({
    type: LOGIN_USER_ERROR,
    payload: error
});

export const logoutUser = (navigate?: any) => {
    return {
        type: LOGOUT_USER,
        payload: {
            navigate
        }
    }
};

export const logoutUserSuccess = () => {
    return {
        type: LOGOUT_USER_SUCCESS,
    }
};

export const logoutUserError = (error: any) => {
    return {
        type: LOGOUT_USER_ERROR,
        payload: error
    }
};

