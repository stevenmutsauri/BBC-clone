import {GET_NEWS_DATA_REQUEST, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE, GET_CORONA_NEWS_SUCCESS, GET_INDIA_NEWS_SUCCESS, GET_ENTERTAINMENT_NEWS_SUCCESS} from './actionType'

export const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    coronaNews: [],
    indiaNews: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case GET_NEWS_DATA_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_NEWS_DATA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: payload
            }
        case GET_NEWS_DATA_FAILURE:
            return {
                ...state,
                isLoading : false,
                isError: true
            }
        case GET_CORONA_NEWS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                isError: false,
                coronaNews: payload
            }
        case GET_INDIA_NEWS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                isError: false,
                indiaNews: payload
            }
        default:
            return state
    }
}

export {reducer}