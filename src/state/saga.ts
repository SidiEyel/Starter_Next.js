import { all } from "redux-saga/effects";
import { AuthSagas } from "./auth/saga";
import { NotificationsSagas } from "./notification/saga";

export default function* Saga() {
    yield all([
        ...AuthSagas,
        ...NotificationsSagas
    ])
}