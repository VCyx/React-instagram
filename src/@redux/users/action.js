import { LOAD_USER_REQUEST, LOAD_USER_SUCCESS, SET_USER_LOGIN } from "./type";

export const getRequest = () => {
  return { type: LOAD_USER_REQUEST, payload: true };
};

export const getUserSuccess = (data) => {
  return { type: LOAD_USER_SUCCESS, payload: data };
};

export const setUserLogin = (token) => {
  return { type: SET_USER_LOGIN, payload: token };
};
