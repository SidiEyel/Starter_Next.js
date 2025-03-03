import { call, put, takeEvery } from 'redux-saga/effects';
import { registerUserApi } from "@/helpers"
import { registerUserError, registerUserSuccess } from './actions';
import { REGISTER_USER } from './actiontype';
import { apiError, apiSuccess } from '@/state/notification';

function* registerUser({payload }: any): any {
    const { user, navigate } = payload
    try {
        const response = yield call(registerUserApi, user);
        yield put(registerUserSuccess({response}));
        yield put(apiSuccess({
            title: "Register success",
            success: true
        }));
        navigate('/auth/login')
    } catch (error) {
        yield put(registerUserError(error));
        yield put(apiError({
            title: "Register error",
            success: false
        }));
    }
}

function* registerSaga() {
    yield takeEvery(REGISTER_USER, registerUser)
}
export default registerSaga