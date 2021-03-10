import {GET_NEWS_DATA_REQUEST, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE, GET_ASIA_NEWS_SUCCESS} from './actionType'

const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    asiaNews: []
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
        case GET_ASIA_NEWS_SUCCESS:
            return {
                ...state,
                isLoading : false,
                isError: false,
                asiaNews: payload
            }
        default:
            return state
    }
}

export {reducer}