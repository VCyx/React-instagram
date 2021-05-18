import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  GET_USER,
  SET_USER_LOGIN,
  SET_SUBSCRIBED_USERS,
  SET_RANDOM_USERS,
} from "./type";

export const getRequest = () => {
  return { type: LOAD_USER_REQUEST, payload: true };
};

export const getUserSuccess = (data) => {
  return { type: LOAD_USER_SUCCESS, payload: data };
};

export const getOneUser = (data) => {
  return { type: GET_USER, payload: data };
};

export const setUserLogin = (token) => {
  return { type: SET_USER_LOGIN, payload: token };
};

export const setSubscribedUsers = (data) => {
  return { type: SET_SUBSCRIBED_USERS, payload: data };
};

export const setRandomUsers = (data) => {
  return { type: SET_RANDOM_USERS, payload: data };
};
