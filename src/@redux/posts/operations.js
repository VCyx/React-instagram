import axios from "axios";
import { getPostsAll } from "./actions";

const URL_GET_POSTS = `http://176.105.100.114:7000/api/post`;

export const getPosts = () => (dispatch) => {
  return axios(URL_GET_POSTS).then((res) => {
    dispatch(getPostsAll(res.data.rows));
  });
};

export const getPostsMain = async (page, limit = 3) => {
  return await fetch(
    `http://176.105.100.114:7000/api/post/?limit=${limit}&page=${page}`
  )
    .then((res) => res.json())
    .then((res) => res.rows);
};
