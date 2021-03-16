import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchWorkData} from "../../Redux/worklife/action"
import WorldCards from "./worldcards"

import Editor from "./editor"
import Middle from "./middle"
import Equality from "./equality"
import { BannerAd } from "../Advertisement/BannerAd"
import { PopupAd } from "../Advertisement/PopupAd"

const Work = ()=>{
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.work.data)
    // console.log(data)
 
    React.useEffect(()=>{
        dispatch(fetchWorkData())
    },[dispatch])

    return(
        <>
        <BannerAd></BannerAd>
        <PopupAd></PopupAd>
            <Editor  data={data}/>
            <Middle/>
            <WorldCards data={data}/>
            <Equality data={data}/>
        </>
    )
}
export default Work