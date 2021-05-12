import axios from "axios";
import { getUserSuccess, getRequest, getUserPosts } from "./action";

const URL_GET_USER = `http://176.105.100.114:7000/api/post`; // змінити коли настроїть сервак під юзерів
const URL_USER_POSTS = `http://176.105.100.114:7000/api/post/user/`; // змінити коли настроїть сервак під юзерів

export const getUser = () => (dispatch) => {
  dispatch(getRequest());
  axios(URL_GET_USER).then((res) => {
    dispatch(getUserSuccess(res.data.rows));
  });
};

export const getPostsUser = (id) => (dispatch) => {
  axios(URL_USER_POSTS + id).then((res) => dispatch(getUserPosts(res.data)));
};
