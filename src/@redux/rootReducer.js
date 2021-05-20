import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import postsReducer from "./posts/postsReducer";

const rootReducer = combineReducers({
  userReducer,
  postsReducer,
});
export default rootReducer;
