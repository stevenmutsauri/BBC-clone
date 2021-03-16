import React from  "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import ReelCard from "./ReelCard"

const Reel = ()=>{

    const data = useSelector((state)=>state.app.data)
    const dispatch = useDispatch()


    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])

    let items = data

    return(

            <div>
                <ReelCard  data={items}/>
            </div>
    )
}
export default Reel