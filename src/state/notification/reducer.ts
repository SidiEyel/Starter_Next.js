import { combineReducers } from 'redux';

import ToastReducer from './toast/reducer';

export const NotificationReducer = combineReducers({
  toast: ToastReducer,
});
