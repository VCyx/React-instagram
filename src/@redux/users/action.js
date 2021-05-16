import {
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_POST,
} from './type'

export const getRequest = () => {
  return {type: LOAD_USER_REQUEST, payload: true}
};

export const getUserSuccess = data => {
  return {type: LOAD_USER_SUCCESS, payload: data}
};

// export const getUserPost = data => {
//   return {type: LOAD_USER_POST, payload: data}
// };



