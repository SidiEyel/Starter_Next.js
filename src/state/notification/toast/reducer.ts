import { API_ERROR, API_SUCCESS } from './actionTypes';

const INITIAL_STATE = {
  success: null,
  error: null,
};

const ToastReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case API_SUCCESS:
      return {
        ...state,
        success: action.payload,
        error: null,
      };
    case API_ERROR:
      return {
        ...state,
        error: action.payload,
        success: null,
      };
    default:
      return {
        ...state,
        success: null,
        error: null,
      };
  }
};

export default ToastReducer;
