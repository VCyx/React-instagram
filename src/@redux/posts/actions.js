import { ADD_POST_COMMENT, LOAD_MAIN_POSTS } from "./types";

export const getPostsAll = (data) => {
  return { type: LOAD_MAIN_POSTS, payload: data };
};

export const addPostComment = (postID, comment) => {
  return { type: ADD_POST_COMMENT, payload: { postID, comment } };
};
