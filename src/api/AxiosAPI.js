import axios from "axios";

const url = "176.105.100.114";
const port = "7000";

export const mainURL = "http://176.105.100.114:7000/";
export const avaURL = "http://176.105.100.114:7000/ava-user/";

const host = axios.create(
    {
        baseURL: `http://${url}:${port}/`
    },
    []
);
const authHost = axios.create(
    {
        baseURL: `http://${url}:${port}/`
    },
    []
);

const verification = configuration => {
    configuration.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return configuration
}

authHost.interceptors.request.use(verification)

export {
    host,
    authHost
}
