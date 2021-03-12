import axios from "axios"
import {GET_NEWSDATA_REQUEST,GET_NEWSDATA_SUCCESS,GET_NEWSDATA_FAILURE} from "./actionTypes"

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

export {getNewsDataFailure,getNewsDataSuccess,getNewsDataRequest,getNewsData}