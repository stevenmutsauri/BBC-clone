import axios from "axios"
import { getSearchFailure } from "../Search/action"
import {GET_NEWSDATA_REQUEST,GET_NEWSDATA_SUCCESS,GET_NEWSDATA_FAILURE,GET_SINGLE_ID_REQUEST,GET_SINGLE_ID_SUCCESS,GET_SINGLE_ID_FAILURE} from "./actionTypes"

const getNewsDataRequest = () => {
    return {
        type:GET_NEWSDATA_REQUEST,
    }
}

const getNewsDataSuccess = (payload) => {
    return {
        type:GET_NEWSDATA_SUCCESS,
        payload
    }
}
const getNewsDataFailure = (payload) => {
    return {
        type:GET_NEWSDATA_FAILURE,
        payload
    }
}

const getSingleIdRequest = () => {
    return {
        type:GET_SINGLE_ID_REQUEST,
    }
}

const getSingleIdSuccess = (payload) => {
    return {
        type:GET_SINGLE_ID_SUCCESS,
        payload
    }
}
const getSingleIdFailure = (payload) => {
    return {
        type:GET_SINGLE_ID_FAILURE,
        payload
    }
}

const getNewsData = (q) => dispatch => {
    dispatch(getNewsDataRequest())
    return axios.get(`https://fake---api.herokuapp.com/news`)
    .then(res => {
        dispatch(getNewsDataSuccess(res.data))
        // return {q,data:res.data.current}
    })
    .catch(err => {
        dispatch(getNewsDataFailure(err))
        // return null
    })
}
const getSingleIdData = (id) => dispatch => {
    dispatch(getSingleIdRequest())
    console.log(id)
    return axios.get(`https://fake---api.herokuapp.com/news/${id}`)
    .then(res => {
        dispatch(getSingleIdSuccess(res.data))
        // return {q,data:res.data.current}
    })
    .catch(err => {
        dispatch(getSearchFailure(err))
        // return null
    })
}

export {getNewsDataFailure,getSingleIdData,getNewsDataSuccess,getNewsDataRequest,getNewsData,getSingleIdFailure,getSingleIdRequest,getSingleIdSuccess}