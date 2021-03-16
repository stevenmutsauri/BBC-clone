import React from  "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import BusinessCard2 from "./BuseinessCard2"

const Business2 = ()=>{

    const data = useSelector((state)=>state.app.data)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])

    let items = data

    return(

            <div style={{margin:"20px 0px"}}>
                <BusinessCard2  data={items}/>
            </div>
    )
}
export default Business2