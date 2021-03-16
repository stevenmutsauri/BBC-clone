import React from "react"

import styles from "../Styles/business.module.css"
const BusinessCard = ({data})=>{

    return(
    <>
       {data.length!==0 && (
       <div className={styles.main}>
           <div class={styles.innerbox}>
                <p>TECHNOLOGY OF BUSINESS</p>
                <div className={styles.imgdiv}>
                    <img src = {data[31].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[31].category}</p>
                    <p>{data[31].headline}</p>
                </div>
           </div>
           <div class={styles.innerbox}>
                <p>NEW BUSINESS</p>
                    
                <div className={styles.imgdiv}>
                    <img src = {data[32].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[32].category}</p>
                    <p>{data[32].headline}</p>
                </div>
                
            </div>
            </div>)}
        </>
    )
    
}

export default BusinessCard