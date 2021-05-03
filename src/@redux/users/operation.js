import axios from "axios";
import {getCardSuccess, getRequest} from "./action";

const getUser = () => (dispatch) => {
  dispatch(getRequest());
  axios(`http://176.105.100.114:7000/api/post`).then(res=>{
    dispatch(getCardSuccess(res.data.rows));
  })
};

export default getUser;