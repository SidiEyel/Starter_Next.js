import { combineReducers } from 'redux';
import Login from './login/reducer'
import Register from './register/reducer'

export const AuthReducer = combineReducers({
    login: Login,
    register: Register
})