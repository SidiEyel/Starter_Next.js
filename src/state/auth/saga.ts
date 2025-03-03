import { fork } from "redux-saga/effects";
import LoginSaga from "./login/saga";
import RegisterSaga from './register/saga';

export const AuthSagas = [
    fork(LoginSaga),
    fork(RegisterSaga)
]