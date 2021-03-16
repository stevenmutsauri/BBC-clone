import React from  "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import FutureCard from "./FutureCard"

const Future = ()=>{

    const data = useSelector((state)=>state.app.data)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])

    let items = data

    return(

            <div style={{margin:"20px 0px"}}>
                <FutureCard  data={items}/>
            </div>
    )
}
export default Future