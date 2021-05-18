import { ADD_POST_COMMENT, LOAD_MAIN_POSTS } from "./types";

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
          const newPost = posts[posts.indexOf(post)];
          newPost.commentaries = action.payload.comment;
          return newPost;
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
