import { LOGIN_DATA, LOGIN_SUCCESS } from "./Action"

const intial_login ={
    data_auth:[],
    isAuth:false
}

export const loginDataSet=(state=intial_login,action)=>{
    switch(action.type){
        case LOGIN_DATA :
            console.log(action.payload)
            return {
                ...state,
                data_auth:action.payload
            }
        case LOGIN_SUCCESS :
            return {
                ...state,
                isAuth:action.payload
            }
        default :
        return state
    }
}