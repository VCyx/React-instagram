import {
  ADD_POST_COMMENT,
  CLEAR_POSTS,
  LOAD_MAIN_POSTS,
  UPDATE_POST_LIKES,
} from "./types";

const initialState = {
  posts: [],
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MAIN_POSTS:
      console.log("posts payload", action.payload);
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
    case UPDATE_POST_LIKES: {
      const posts = state.posts;
      const newPosts = posts.map((post) => {
        if (post.id === action.payload.postID) {
          const newPost = posts[posts.indexOf(post)];
          newPost.likes = action.payload.data;
          return newPost;
        } else {
          return post;
        }
      });
      return { ...state, posts: newPosts };
    }
    case CLEAR_POSTS:
      return { ...state, posts: [] };

    default:
      return state;
  }
};

export default postsReducer;
