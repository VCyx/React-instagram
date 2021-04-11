import axios from "axios";

const url = "localhost";
const port = "8085";

export default axios.create(
  {
    baseURL: `http://${url}:${port}/api`,
    responseType: "json",
  },
  []
);
