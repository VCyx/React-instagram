import axios from "axios";

import {
  getUsersSuccess,
  getOneUser,
  setSubscribedUsers,
  setRandomUsers,
  setUserData,
} from "./action";
import { getPostsMain } from "../posts/operations";
import { clearPosts, getPostsAll } from "../posts/actions";

const GET_USER_PAGE = `http://176.105.100.114:7000/api/user/ `;
const URL_GET_USERS = `http://176.105.100.114:7000/api/user/all`;
const URL_GET_SUBSCRIPTION_USERS = `http://176.105.100.114:7000/api/subscription/signed/`;
const URL_SUBSCRIBE_ON_USER = `http://176.105.100.114:7000/api/subscription/`;
const URL_RANDOM_USERS = `http://176.105.100.114:7000/api/subscription/randsigned`;
const GET_MAIN_USER = `http://176.105.100.114:7000/api/user/owner`;

export const getUsers = () => (dispatch) => {
  axios(URL_GET_USERS).then((res) => {
    dispatch(getUsersSuccess(res.data.rows));
  });
};

export const getUserPage = (userId) => (dispatch) => {
  axios(`${GET_USER_PAGE}${userId}`).then((res) => {
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
    .then(async (res) => {
      dispatch(getUsersSubscribedOnce());
      dispatch(clearPosts());
      const newPost = await getPostsMain(1, 3);
      dispatch(getPostsAll(newPost));
    });
};

const getUsersSubscribedOnce = () => (dispatch) => {
  axios(URL_GET_SUBSCRIPTION_USERS, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  }).then((res) => {
    dispatch(setSubscribedUsers(res.data));
  });
};

export const getUserData = () => (dispatch) => {
  axios
    .get(GET_MAIN_USER, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    })
    .then((res) => {
      dispatch(setUserData(res.data));
    });
};
