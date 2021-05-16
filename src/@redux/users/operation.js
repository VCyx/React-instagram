import axios from "axios";
import {getUserSuccess, getRequest, getUserPost} from "./action";

const URL_GET_USER = `http://176.105.100.114:7000/api/user/all `;
//const URL_GET_USER_POST = `http://176.105.100.114:7000/api/post/user/`;


export const getUser = () => (dispatch) => {
  dispatch(getRequest());
  axios(URL_GET_USER).then((res) => {
    dispatch(getUserSuccess(res.data.rows));
  });
};

// export const getUserPosts = (userId) => (dispatch) => {
//   axios(URL_GET_USER_POST + userId).then((res) => {
//     dispatch(getUserPost(res.data.rows));
//   });
// };

