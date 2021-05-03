import {combineReducers} from "redux";
import  userReducer from './users/userReducer'

const rootReducer = combineReducers({
    // emails: emailsReducer,
      userReducer
});
export default rootReducer;
