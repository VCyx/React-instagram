import axios from "axios";
import { addPostComment, getPostsAll, updatePostLikes } from "./actions";
import { saveLocalComment } from "../users/action";

const URL_GET_POSTS = `http://176.105.100.114:7000/api/post`;
const TOGGLE_LIKE = `http://176.105.100.114:7000/api/post/like/`;
const ADD_COMMENT = `http://176.105.100.114:7000/api/post/comment/`;

export const getPosts = () => (dispatch) => {
  return axios(URL_GET_POSTS).then((res) => {
    dispatch(getPostsAll(res.data.rows));
  });
};

export const getPostsMain = async (page, limit = 3) => {
  return await fetch(
    `http://176.105.100.114:7000/api/post/?limit=${limit}&page=${page}`,
    { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
  )
    .then((res) => res.json())
    .then((res) => res.rows);
};

export const toggleLikePost = (postID) => (dispatch) => {
  axios
    .put(
      TOGGLE_LIKE + postID,
      {},
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((res) => {
      dispatch(updatePostLikes(postID, res.data));
    });
};

export const addComment = ({ postID, comment }) => (dispatch) => {
  axios
    .post(
      ADD_COMMENT + postID,
      { comment: comment },
      { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
    )
    .then((res) => {
      dispatch(saveLocalComment(res.data)); // todo under question
      dispatch(addPostComment(postID, res.data));
    })
    .catch((er) => {
      console.log(er);
    });
};
