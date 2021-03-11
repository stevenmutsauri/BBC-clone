import React from "react"

import styles from "./business.module.css"
const BusinessCard2 = ({data})=>{
    const {item} = data
    return(
    <>
       {item && (
       <div className={styles.main}>
           <div class={styles.innerbox}>
                <p>TECHNOLOGY OF BUSINESS</p>
                <div className={styles.imgdiv}>
                    <img src = {data[36].img[0].img_url} style={{width:"100%",height:"355px"}}/>
                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[36].category}</p>
                    <p>{data[36].headline}</p>
                </div>
           </div>
           <div class={styles.innerbox}>
                <p>NEW BUSINESS</p>
                    
                <div className={styles.imgdiv}>
                    <img src = {data[37].img[0].img_url} style={{width:"100%",height:"355px"}}/>
                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[37].category}</p>
                    <p>{data[37].headline}</p>
                </div>
                
            </div>
       
            </div>)}
        </>
    )
}

export default BusinessCard2