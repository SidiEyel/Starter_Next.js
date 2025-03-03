import { formatNotification } from '@/components/Notification';
import { API_ERROR, API_SUCCESS } from './actionTypes';

export const apiSuccess = (payload: any) => {
  return {
    type: API_SUCCESS,
    payload: formatNotification(payload),
  };
};

export const apiError = (payload: any) => {
  return {
    type: API_ERROR,
    payload: formatNotification(payload),
  };
};
