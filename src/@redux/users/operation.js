import axios from "axios";
import {getUserSuccess, getRequest,getOneUser} from "./action";

const URL_GET_USER = `http://176.105.100.114:7000/api/user/all `;
const GET_USER = `http://176.105.100.114:7000/api/user/ `;

export const getUser = () => (dispatch) => {
  dispatch(getRequest());
  axios(URL_GET_USER).then((res) => {
    dispatch(getUserSuccess(res.data.rows));
  });
};

export const getUserPage = (userId) => (dispatch) => {
  axios(`${GET_USER}${userId}`).then((res) => {
    dispatch(getOneUser(res.data));
  });
};
