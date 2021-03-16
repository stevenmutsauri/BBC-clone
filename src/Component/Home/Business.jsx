import React from  "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import BusinessCard from "./BusinessCard"

const Business = ()=>{

    const data = useSelector((state)=>state.app.data)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])

    let items = data

    return(

            <div style={{margin:"20px 0px"}}>
                <BusinessCard  data={items}/>
            </div>
    )
}
export default Business