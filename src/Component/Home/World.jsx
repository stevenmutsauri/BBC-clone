import React from  "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import WorldCard from "./WorldCard"

const World = ()=>{

    const data = useSelector((state)=>state.app.data)
    const dispatch = useDispatch()

    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])

    let items = data

    return(

            <div style={{margin:"20px 0px"}}>
                <WorldCard  data={items}/>
            </div>
    )
}
export default World