import { LOAD_MAIN_POSTS } from "./types";

export const getPostsAll = (data) => {
  return { type: LOAD_MAIN_POSTS, payload: data };
};
