import {GET_NEWS_DATA_REQUEST, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from './actionType'

const initialState = {
    isLoading: false,
    isError: false,
    data: []
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
        default:
            return state
    }
}

export {reducer}