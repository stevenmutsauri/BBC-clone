import {GET_TOP_STORIES_SUCCESS, GET_NEWS_DATA_REQUEST, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE, GET_CORONA_NEWS_SUCCESS, GET_INDIA_NEWS_SUCCESS} from './actionType'
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

const getCoronaNewsSuccess = (payload) =>{
    return {
        type: GET_CORONA_NEWS_SUCCESS,
        payload
    }
}

const getIndiaNewsSuccess = (payload) =>{
    return {
        type: GET_INDIA_NEWS_SUCCESS,
        payload
    }
}


const getTopStoriesSuccess = (payload) =>{
    return {
        type: GET_TOP_STORIES_SUCCESS,
        payload
    }
}

// For Responce Shuffling
const shuffle = (para) => {
    for (let i = para.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [para[i], para[j]] = [para[j], para[i]];
    }
    return para;
}


// For All News Data
const fetchNewsData = () => (dispatch) => {
    dispatch(getNewsDataRequest())

    return axios.get("https://fake---api.herokuapp.com/news")
    .then((res) => {
        const getData = getNewsDataSuccess(shuffle(res.data))
        dispatch(getData)
    })
    .catch((err) => {
        const errCaught = getNewsDataFailure()
        dispatch(errCaught)
    })
}


// For Corona News Data
const fetchCoronaNews = () => (dispatch) => {
    dispatch(getNewsDataRequest())

    return axios.get("https://fake---api.herokuapp.com/news?category=Coronavirus")
    .then((res) => {
        const getData = getCoronaNewsSuccess(shuffle(res.data))
        dispatch(getData)
    })
    .catch((err) => {
        const errCaught = getNewsDataFailure()
        dispatch(errCaught)
    })
}

// For India News Data
const fetchIndiaNews = () => (dispatch) => {
    dispatch(getNewsDataRequest())

    return axios.get("https://fake---api.herokuapp.com/news?sub_category=India")
    .then((res) => {
        const getData = getIndiaNewsSuccess(shuffle(res.data))
        dispatch(getData)
    })
    .catch((err) => {
        const errCaught = getNewsDataFailure()
        dispatch(errCaught)
    })
}


const fetchTopStories = () => (dispatch) => {
    dispatch(getNewsDataRequest())

    return axios.get("https://fake---api.herokuapp.com/top_stories")
    .then((res) => {
        const getData = getTopStoriesSuccess(res.data)
        dispatch(getData)
    })
    .catch((err) => {
        const errCaught = getNewsDataFailure()
        dispatch(errCaught)
    })
}

export { getNewsDataRequest, 
        getNewsDataSuccess, 
        getNewsDataFailure, 
        fetchNewsData,
        fetchCoronaNews,
        fetchIndiaNews,
        fetchTopStories,
        shuffle
}