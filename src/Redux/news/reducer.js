import { GET_NEWSDATA_FAILURE, GET_NEWSDATA_REQUEST, GET_NEWSDATA_SUCCESS ,GET_SINGLE_ID_REQUEST,GET_SINGLE_ID_FAILURE,GET_SINGLE_ID_SUCCESS} from "./actionTypes"


const initState = {
    newsData:[],
    mostWatched:[],
    coronaData:[],
    sportsData:[],
    continentData:[],
    isError:false,
    isLoading:false,
    singleIdData:{},
    isLoadingId:false,
    isErrorId:false,
}

const newsReducer = (state = initState, {type,payload}) => {
    switch (type){
        case GET_NEWSDATA_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case GET_NEWSDATA_SUCCESS:{
            const corona = payload.filter(item => item.category === "Coronavirus")
            const sports = payload.filter(item => item.category === "Sports")
            const mostWatched = payload.filter(item => item.category === "Trending" )
            const continent = payload.filter(item => item.category === "UK"  )
            // console.log(continent)
            return {
                ...state,
                newsData:[...payload],
                mostWatched,
                coronaData:corona,
                sportsData:sports,
                continentData:continent,
                isLoading:false,
                isError:false,
            }
        }
        case GET_NEWSDATA_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }

        case GET_SINGLE_ID_REQUEST:{
            return {
                ...state,
                isLoadingId:true,
                isErrorId:false,
            }
        }

        case GET_SINGLE_ID_SUCCESS:{
            return {
                ...state,
                isLoadingId:false,
                isErrorId:true,
                singleIdData:{...payload},
            }
        }

        case GET_SINGLE_ID_FAILURE:{
            return {
                ...state,
                isLoadingId:false,
                isErrorId:true,
            }
        }
        default :
        return state
    }
}

export {newsReducer}