import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { AuthReducer } from "./auth/reducer";
import Saga from "./saga";
import { NotificationReducer } from "./notification/reducer";

const sagaMiddleware = createSagaMiddleware();
const combinedReducers = combineReducers({
    auth: AuthReducer,
    notification: NotificationReducer,
})
export const store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(Saga)