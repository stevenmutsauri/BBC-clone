import { WORKLIFE_FAILURE, WORKLIFE_REQUEST, WORKLIFE_SUCCESS } from "./actionType"

export const initialState = {
    isLoading: false,
    isError: false,
    data: []
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case WORKLIFE_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case WORKLIFE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: [...payload]
            }
        case WORKLIFE_FAILURE:
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