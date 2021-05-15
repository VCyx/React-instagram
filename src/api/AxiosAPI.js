import axios from "axios";

const url = "localhost";
const port = "8085";

export const mainURL = "http://176.105.100.114:7000/";
export const avaURL = "http://176.105.100.114:7000/ava-user/";

export default axios.create(
  {
    baseURL: `http://${url}:${port}/api`,
    responseType: "json",
  },
  []
);
