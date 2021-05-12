import axios from "axios";
import { getPostsAll } from "./actions";

const URL_GET_POSTS = `http://176.105.100.114:7000/api/post`;

export const getPosts = () => (dispatch) => {
  axios(URL_GET_POSTS)
    .then((res) => {
      dispatch(getPostsAll(res.data.rows));
    })
    .catch((er) => {
      console.log(er);
    });
};
