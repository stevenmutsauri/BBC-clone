import axios from "axios"
import { LOGIN_DATA, LOGIN_SUCCESS, POST_NEWS_DATA_FAILURE, POST_NEWS_DATA_REQUEST,POST_NEWS_DATA_SUCCESS ,GET_NEWS_DATA_REQUEST ,GET_NEWS_DATA_FAILURE ,GET_NEWS_DATA_SUCCESS } from "./ActioType"

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

export const newsDataRequest=()=>{
    return {
        type: POST_NEWS_DATA_REQUEST,
    }
}
export const newsDataSuccess=(payload)=>{
    return {
        type: POST_NEWS_DATA_SUCCESS,
        payload
    }
}

export const newsDataFailure=(payload)=>{
    return {
        type: POST_NEWS_DATA_FAILURE,
        payload
    }
}


export const getNewsDataRequest=()=>{
    return {
        type: GET_NEWS_DATA_REQUEST,
    }
}
export const getNewsDataSuccess=(payload)=>{
    return {
        type: GET_NEWS_DATA_SUCCESS,
        payload
    }
}

export const getNewsDataFailure=(payload)=>{
    return {
        type: GET_NEWS_DATA_FAILURE,
        payload
    }
}

const newsDataAdmin = (payload) => dispatch => {
    dispatch(newsDataRequest())
    return axios.post("https://bbc-db.herokuapp.com/newspost",payload)
    .then(res => {
        dispatch(newsDataSuccess(res.data))
    })
    .catch(err => {
        dispatch(newsDataFailure("Error"))
    })
}   

const getNewsDataPost = () => dispatch => {
    dispatch(getNewsDataRequest())
    return axios.get("https://bbc-db.herokuapp.com/newspost")
    .then(res => {
        // console.log(res.data)
        dispatch(getNewsDataSuccess(res.data))
    })
    .catch(err => {
        dispatch(getNewsDataFailure("Error"))
    })
}  

export {newsDataAdmin,getNewsDataPost}
