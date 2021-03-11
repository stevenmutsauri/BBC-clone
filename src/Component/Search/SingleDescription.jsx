import React from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import SingleDescLeft from "./SingleDescLeft";
import style from "../Styles/singleDescription.module.css";
import { Link } from "react-router-dom";

export default function SingleDescription() {
  const searchList = useSelector((state) => state.searchList);
  const { singleId } = useParams();
  console.log(searchList);
  var single = searchList?.filter((item) => {
    if (item.id == singleId) {
      return true;
    }
  })[0];

 
  const desc1 = single &&  single.description.split(".")
  const desc2 =  single &&  single.description.split(".");
  const desc3 =  single &&  single.description.split(".");
  

  var arr=[]
  const right1=searchList?.filter((item)=>{
      if(item.headline=="Nicola Sturgeon 'cannot turn a blind eye' to Rangers crowds"){
          return true
      }
      
  })[0]
  const right2=searchList?.filter((item)=>{
    if(item.headline=="Covid: How this Indian firm is vaccinating the world"){
        return true
    }
})[0]
const right3=searchList?.filter((item)=>{
    if(item.headline=="Covid: Germany approves AstraZeneca vaccine for over-65s"){
        return true
    }
})[0]
arr.push(right1,right2,right3)
arr=arr.filter((item)=>item!=undefined)
console.log(arr)

const desc4 =arr.length>0 && arr.map((item)=> item.article_data && item.article_data[0].sub_description.split("."))
  console.log("hello")
console.log(desc4)


  console.log(desc1);
  console.log(single);
  return (
    <>
   {single && <div className={style.singleDescription__page}>
       <SingleDescLeft single={single} desc1={desc1} desc2={desc1} desc3={desc3}></SingleDescLeft>
      <div className={style.singleDesc__right}>
        
        <div className={style.singleDesc__right__sec1}>
        <div></div>
        <h2>Top Stories</h2>
        {arr?.map((item)=><div>
           <Link className={style.single__topStories}> <div className={style.single__topStories}>{item && item.headline}</div></Link>
           
        </div>)}
        </div>
      </div>
    </div>}
    </>
  );
}
