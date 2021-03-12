import { GET_SEARCH_FAILURE, GET_SEARCH_REQUEST, GET_SEARCH_SUCCESS } from "./actionTypes"

const initState={
    isLoading:false,
    isError:false,
    searchList:[]
}
const reducer=(state=initState,{type,payload})=>{
    console.log(state)
    switch(type){
        case GET_SEARCH_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false
            }
        }
        case GET_SEARCH_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                isError:false,
                searchList:payload
            }
        }
        case GET_SEARCH_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }
        default:{
            return state
        }
    }
}
export {reducer}