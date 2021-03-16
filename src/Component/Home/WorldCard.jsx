import React from "react"

import styles from "../Styles/world.module.css"
const WorldCard = ({data})=>{

    return(
    <>
       {data.length!==0  && (
       <div className={styles.main}>
           <div class={styles.innerbox}>
                <p style={{borderLeft:"3px solid blue" ,margin:"5px 10px 35px",paddingLeft:"10px",fontSize:"40px"}}>World In Picture</p>
                <div className={styles.imgdiv}>
                    <img src = {data[18].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                    <p style={{borderLeft:"2px solid red" ,margin:"-35px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal",color:"white"}}>{data[18].category}</p>
                    <p style={{margin:"-55px 10px",color:"white"}}>{data[18].headline}</p>
                </div>
           </div>
           <div class={styles.innerbox}>
                
                    
                <div className={styles.imgdiv1}>
                    <img src = {data[19].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                    <p style={{borderLeft:"2px solid yellow" ,margin:"-35px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal",color:"white"}}>{data[19].category}</p>
                    <p style={{margin:"-55px 10px",color:"white"}}>{data[19].headline}</p>
                </div>
                
            </div>
            </div>)}
        </>
    )
}

export default WorldCard