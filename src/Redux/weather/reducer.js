import { GET_WEATHER_FAILURE, GET_WEATHER_REQUEST, GET_WEATHER_SUCCESS } from "./actionTypes"


const initState = {
    weather:null,
    isError:false,
    isLoading:false,
}

const weatherReducer = (state = initState, {type,payload}) => {
    switch (type){
        case GET_WEATHER_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case GET_WEATHER_SUCCESS:{
            return {
                ...state,
                weather:payload,
                isLoading:false,
                isError:false,
            }
        }
        case GET_WEATHER_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }

        default :
        return state
    }
}

export {weatherReducer}