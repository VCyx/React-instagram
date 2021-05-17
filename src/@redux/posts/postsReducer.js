import { LOAD_MAIN_POSTS } from "./types";

const initialState = {
  posts: [],
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MAIN_POSTS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
