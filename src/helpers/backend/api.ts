import { post } from "./client";
import * as endpoints from './endpoints'

export const loginApi = (user: any) => post(endpoints.USER_LOGIN, user);
export const registerUserApi = (user: any) => post(endpoints.USER_REGISTER, user);
