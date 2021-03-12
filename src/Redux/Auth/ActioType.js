import { LOGIN_DATA, LOGIN_SUCCESS } from "./Action"

export const loginData=(payload)=>{
    return {
        type: LOGIN_DATA,
        payload
    }
}

export const loginSuccess=(payload)=>{
    return {
        type: LOGIN_SUCCESS,
        payload
    }
}