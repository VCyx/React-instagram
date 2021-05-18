import axios from "axios";

import { getUserSuccess, getRequest, getOneUser } from "./action";

const GET_USER = `http://176.105.100.114:7000/api/user/ `;
const URL_GET_USER = `http://176.105.100.114:7000/api/user/all`;
const TOGGLE_LIKE = `http://176.105.100.114:7000/api/post/like/`;
const ADD_COMMENT = `http://176.105.100.114:7000/api/post/comment/`;

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

export const toggleLikePost = (postID) => {
  axios.put(TOGGLE_LIKE + postID, {}).then((res) => {
    console.log(res);
  });
};

export const addComment = ({ postID, comment }) => {
  axios.post(ADD_COMMENT + postID, { comment: comment }).then((res) => {
    console.log(res);
  });
};
