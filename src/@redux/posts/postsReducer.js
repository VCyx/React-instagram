import { ADD_POST_COMMENT, LOAD_MAIN_POSTS } from "./types";
import { getOnePost, updatePost } from "./operations";
import { useDispatch } from "react-redux";

const initialState = {
  posts: [],
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MAIN_POSTS:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
        isLoading: false,
      };
    case ADD_POST_COMMENT:
      const posts = state.posts;
      const newPosts = posts.map((post) => {
        if (post.id === action.payload.postID) {
          const updatedPost = action.payload.post;
          return (posts[posts.indexOf(post)] = updatedPost);
        } else {
          return post;
        }
      });
      return { ...state, posts: newPosts };

    default:
      return state;
  }
};

export default postsReducer;
