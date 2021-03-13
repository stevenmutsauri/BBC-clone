import {WORKLIFE_FAILURE, WORKLIFE_REQUEST, WORKLIFE_SUCCESS} from "./actionType"
import axios from "axios"

const getWorkLifeRequest = () =>{
    return {
        type: WORKLIFE_REQUEST
    }
}

const getWorkLifeSuccess = (payload) =>{
    return {
        type: WORKLIFE_SUCCESS,
        payload
    }
}

const getWorkLifeFailure = () =>{
    return {
        type: WORKLIFE_FAILURE
    }
}



// // For Responce Shuffling
// const shuffle = (para) => {
//     for (let i = para.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [para[i], para[j]] = [para[j], para[i]];
//     }
//     return para;
// }


// For All News Data
export const fetchWorkData = () => (dispatch) => {
    dispatch(getWorkLifeRequest())

    return axios.get("https://fake---api.herokuapp.com/work")
    .then((res) => {
        const getData = getWorkLifeSuccess(res.data)
        console.log(res.data)
        dispatch(getData)
    })
    .catch((err) => {
        const errCaught = getWorkLifeFailure()
        dispatch(errCaught)
    })
}