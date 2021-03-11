import {GET_NEWS_DATA_REQUEST, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from './actionType'
import axios from 'axios'

const getNewsDataRequest = () =>{
    return {
        type: GET_NEWS_DATA_REQUEST
    }
}

const getNewsDataSuccess = (payload) =>{
    return {
        type: GET_NEWS_DATA_SUCCESS,
        payload
    }
}

const getNewsDataFailure = () =>{
    return {
        type: GET_NEWS_DATA_FAILURE
    }
}

const fetchNewsData = () => (dispatch) => {
    dispatch(getNewsDataRequest())

    return axios.get("https://fake---api.herokuapp.com/news")
    .then((res) => {
        const getData = getNewsDataSuccess(res.data)
        dispatch(getData)
        console.log(getData);
    })
    .catch((err) => {
        const errCaught = getNewsDataFailure()
        dispatch(errCaught)
    })
}

export { getNewsDataRequest, getNewsDataSuccess, getNewsDataFailure, fetchNewsData}