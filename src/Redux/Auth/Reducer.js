import { LOGIN_DATA, LOGIN_SUCCESS, POST_NEWS_DATA_FAILURE, POST_NEWS_DATA_REQUEST, POST_NEWS_DATA_SUCCESS ,GET_NEWS_DATA_REQUEST ,GET_NEWS_DATA_FAILURE ,GET_NEWS_DATA_SUCCESS} from "./ActioType"

const intial_login ={
    data_auth:[],
    isAuth:false,
    isAdminAuth:false,
    adminAuthData:[],
    isDataError:false,
    isDataLoading:false,
    isPostError:false,
    isPostLoading:false,
}

export const loginDataSet=(state=intial_login,action)=>{
    switch(action.type){
        case LOGIN_DATA :
            return {
                ...state,
                data_auth:action.payload
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isAuth:action.payload
            }

            case POST_NEWS_DATA_REQUEST:
            return {
                ...state,
                isPostLoading:true,
            }

            case POST_NEWS_DATA_SUCCESS :
            return {
                ...state,
                isPostLoading:false,
                isPostError:false,
            }

            case POST_NEWS_DATA_FAILURE :
            return {
                ...state,
                isPostLoading:false,
                isPostError:true,
            }


            case GET_NEWS_DATA_REQUEST:
            return {
                ...state,
                isDataLoading:true,
            }

            case GET_NEWS_DATA_SUCCESS :
            return {
                ...state,
                adminAuthData:[...action.payload],
                isDataLoading:false,
            }

            case GET_NEWS_DATA_FAILURE :
            return {
                ...state,
                isDataError:true,
                isDataLoading:false,
            }
        default :
        return state
    }
}