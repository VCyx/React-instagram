import {authHost,host} from "./AxiosAPI";
import jwt_decode from "jwt-decode";

export const registration = async (email,password,nickname) => {
    const {data} = await host.post('api/user/registration',{email,password,nickname})
    localStorage.setItem('token', data.tokens)
    return jwt_decode(data.tokens)
}
export const login = async (email,password) => {
    const {data} = await host.post('api/user/login',{email,password})
    localStorage.setItem('token', data.tokents)
    return jwt_decode(data.tokents)
}

export const check = async () => {
    const {data} = await authHost.post('api/user/auth')
    localStorage.setItem('token', data.tokents)
    return jwt_decode(data.tokents)
}
