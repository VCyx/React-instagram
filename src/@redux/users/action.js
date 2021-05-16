import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
} from './type'

export const getRequest = () => {
  return {type: LOAD_USER_REQUEST, payload: true}
};

export const getUserSuccess = data => {
  return {type: LOAD_USER_SUCCESS, payload: data}
};




