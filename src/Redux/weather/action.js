import axios from "axios"
import {GET_WEATHER_FAILURE,GET_WEATHER_SUCCESS,GET_WEATHER_REQUEST} from "./actionTypes"

const getWeatherRequest = () => {
    return {
        type:GET_WEATHER_REQUEST
    }
}

const getWeatherSuccess = (payload) => {
    return {
        type:GET_WEATHER_SUCCESS,
        payload
    }
}
const getWeatherFailure = (payload) => {
    return {
        type:GET_WEATHER_FAILURE,
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