import {
  ADD_POST_COMMENT,
  CLEAR_POSTS,
  LOAD_MAIN_POSTS,
  UPDATE_POST_LIKES,
} from "./types";

export const getPostsAll = (data) => {
  return { type: LOAD_MAIN_POSTS, payload: data };
};

export const addPostComment = (postID, comment) => {
  return { type: ADD_POST_COMMENT, payload: { postID, comment } };
};

export const updatePostLikes = (postID, data) => {
  return { type: UPDATE_POST_LIKES, payload: { postID, data } };
};

export const clearPosts = () => {
  return { type: CLEAR_POSTS };
};
