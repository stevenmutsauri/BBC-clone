import axios from "axios"
import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes"
const getSearchRequest=(payload)=>{
    return{
        type:GET_SEARCH_REQUEST,
        payload
    }
}
const getSearchSuccess=(payload)=>{
    return{
        type:GET_SEARCH_SUCCESS,
        payload
    }
}
const getSearchFailure=(payload)=>{
    return{
        type:GET_SEARCH_FAILURE,
        payload
    }
}
const getSearchFetchData=(payload)=>(dispatch)=>{
    dispatch(getSearchRequest())
   return axios.get(`https://fake---api.herokuapp.com/news${payload}`)
    .then((res)=>{
        dispatch(getSearchSuccess(res.data))
    })
    .catch((err)=>{
        dispatch(getSearchFailure())
    })
}


export {getSearchRequest,getSearchSuccess,getSearchFailure,getSearchFetchData}