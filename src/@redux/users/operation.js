import axios from "axios";

import {
  getUserSuccess,
  getRequest,
  getOneUser,
  setSubscribedUsers,
  setRandomUsers,
} from "./action";

const GET_USER = `http://176.105.100.114:7000/api/user/ `;
const URL_GET_USER = `http://176.105.100.114:7000/api/user/all`;
const URL_GET_SUBSCRIPTION_USERS = `http://176.105.100.114:7000/api/subscription/signed/`;
const URL_SUBSCRIBE_ON_USER = `http://176.105.100.114:7000/api/subscription/`;
const URL_RANDOM_USERS = `http://176.105.100.114:7000/api/subscription/randsigned`;

export const getUser = () => (dispatch) => {
  dispatch(getRequest());
  axios(URL_GET_USER).then((res) => {
    dispatch(getUserSuccess(res.data.rows));
  });
};

export const getUserPage = (userId) => (dispatch) => {
  axios(`${GET_USER}${userId}`).then((res) => {
    dispatch(getOneUser(res.data));
  });
};

export const getUsersSubscribed = () => (dispatch) => {
  axios(URL_GET_SUBSCRIPTION_USERS, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  })
    .then((res) => {
      dispatch(setSubscribedUsers(res.data));
    })
    .then(() => {
      dispatch(getRandomUsers());
    });
};

export const getRandomUsers = () => (dispatch) => {
  axios
    .get(URL_RANDOM_USERS, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      dispatch(setRandomUsers(res.data));
    });
};

export const toggleSubscribe = (userID) => (dispatch) => {
  axios
    .post(
      `${URL_SUBSCRIBE_ON_USER}${userID}`,
      {},
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    )
    .then((res) => {
      dispatch(getUsersSubscribed());
    });
};
