import {
  LOAD_USER_SUCCESS,
  GET_USER,
  SET_USER_LOGIN,
  SET_SUBSCRIBED_USERS,
  SET_RANDOM_USERS,
  SET_USER_DATA,
  SAVE_COMMENT,
} from "./type";

export const getUsersSuccess = (data) => {
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

export const setUserData = (data) => {
  return { type: SET_USER_DATA, payload: data };
};

export const saveLocalComment = (data) => {
  return { type: SAVE_COMMENT, payload: data };
};
