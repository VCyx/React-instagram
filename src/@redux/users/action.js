import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  GET_USER,
} from './type'

export const getRequest = () => {
  return {type: LOAD_USER_REQUEST, payload: true}
};

export const getUserSuccess = data => {
  return {type: LOAD_USER_SUCCESS, payload: data}
};

export const getOneUser = data => {
  return {type: GET_USER, payload: data}
};




