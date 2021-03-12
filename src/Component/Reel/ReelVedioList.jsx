import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { getVedioFetchData } from '../../Redux/Search/action'
import style from "../Styles/reelPage.module.css";
import { ImPlay2 } from 'react-icons/im';


export default function ReelVedioList() {
    const vedioList = useSelector(state => state.search.vedioList)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getVedioFetchData())
    },[])
    return (
        <div className={style.reel__wrap}>
            {vedioList?.map((item)=><div>
            <div >
            <img className={style.reel__img} src={item.thumbnail} alt="thumbnail" /> 
          </div>
          <div className={style.image__text}>
            <div>{item.category}</div>
            <h1>{item.title}</h1>
            <h2><ImPlay2/> <span className={style.watchnow}> watch now</span></h2>
          </div>
            </div>)}
            
        </div>
    )
}
// {
//     "id": 1,
//     "category": "ENVIRONMENT",
//     "title": "The tiny nation waging war on plastic",
//     "thumbnail": "https://ichef.bbci.co.uk/news/800/cpsprodpb/F503/production/_116932726_plastic.jpg",
//     "video_url": "https://youtu.be/pB9CnjVI36U"
//   },


{/* <div >
<img className={style.reel__img} src="/reel.jpg" alt="" /> 
</div>
<div className={style.image__text}>
<div>us</div>
<h1>The Fishes and their life</h1>
<h2><ImPlay2/> <span className={style.watchnow}> watch now</span></h2>
</div> */}