import axios from "axios"
import {GET_NEWSDATA_REQUEST,GET_NEWSDATA_SUCCESS,GET_NEWSDATA_FAILURE} from "./actionTypes"

const getWeatherRequest = () => {
    return {
        type:GET_NEWSDATA_REQUEST,
    }
}

const getWeatherSuccess = (payload) => {
    return {
        type:GET_NEWSDATA_SUCCESS,
        payload
    }
}
const getWeatherFailure = (payload) => {
    return {
        type:GET_NEWSDATA_FAILURE,
        payload
    }
}

const getWeather = (q) => dispatch => {
    dispatch(getWeatherRequest())
    return axios.get(`http://api.weatherapi.com/v1/forecast.json`,{
        params:{
            key:process.env.REACT_APP_WEATHER_API_KEY,
            q,
        }
    })
    .then(res => {
        dispatch(getWeatherSuccess(res.data.current))
        return {q,data:res.data.current}
    })
    .catch(err => {
        dispatch(getWeatherFailure(err))
        return null
    })
}

export {getWeatherFailure,getWeatherSuccess,getWeatherRequest,getWeather}