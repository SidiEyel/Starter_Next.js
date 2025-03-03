import { call, put, takeEvery } from 'redux-saga/effects';
import { loginApi } from "@/helpers"
import auth from '@/helpers/auth';
import { loginUserError, loginUserSuccess, logoutUserError, logoutUserSuccess } from './actions';
import { LOGIN_USER, LOGOUT_USER } from './actiontype';
import { apiError, apiSuccess } from '@/state/notification';

function* loginUser({payload }: any): any {
    const { user, navigate, redirectTo } = payload
    try{
        const response = yield call(loginApi, user);
        const isRemember: boolean = user.remember_me === true;
        auth.setToken(response.jwt, isRemember);
        auth.setUserInfo(
            {
                ...response.user,
                showWelcomeToast: true
            },
            isRemember
        );
        const role =  response?.user?.role;
        if(redirectTo === 'starttranslate') {
            if(role === 'translater') {
                navigate('/translate');
            } else if(role === 'admin') {
                navigate('/admin')
            } else {
                navigate('/expert/translate');
            }

        } else if (redirectTo === 'proreviewing') {
            if(role === 'translater') {
                navigate('/review')
            } else {
                navigate('/expert/review');
            }
        } else {
            navigate('/');
        }

        yield put(loginUserSuccess({response}))
        yield put(apiSuccess({
            title: "Successful login",
            success: true
        }));
    } catch(error){
        yield put(loginUserError(error));
        yield put(apiError({
            title: "Connection error, check your credentials",
            success: false
        }));
    }
}

function* logoutUser({ payload: { navigate } }: any): any {
    const user = auth.getUserInfo();
    const role =  user?.role;
    try {
      auth.clearToken();
      auth.clearUserInfo();
      if (role === 'admin') {
        navigate('/auth/login')
      }  else {
        navigate('/');
      }
      yield put(logoutUserSuccess());
    } catch (error) {
        yield put(logoutUserError(error));
    }
}

function* LoginSaga() {
    yield takeEvery(LOGIN_USER, loginUser);
    yield takeEvery(LOGOUT_USER, logoutUser);
}

export default LoginSaga