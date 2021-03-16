import React from "react"
import {useSelector} from "react-redux"
import styles from "../Styles/business.module.css"

const BusinessCard2 = ()=>{
    const data = useSelector(state => state.app.data)

    return(

        <>
            {
                data.length!==0 && (

                    <div className={styles.main}>
                            <div class={styles.innerbox}>
                                <p>TECHNOLOGY OF BUSINESS</p>
                                <div className={styles.imgdiv}>
                                    <img src = {data[29].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[29].category}</p>
                                    <p>{data[29].headline}</p>
                                </div>
                            </div>
                            <div class={styles.innerbox}>
                                <p>NEW BUSINESS</p>
                                <div className={styles.imgdiv}>
                                    <img src = {data[35].img[0].img_url} style={{width:"100%",height:"355px"}} alt="news poster"/>
                                    <p style={{borderLeft:"2px solid red" ,margin:"5px 10px",paddingLeft:"5px",fontSize:"small",fontWeight:"normal"}}>{data[35].category}</p>
                                    <p>{data[35].headline}</p>
                                </div>
                            </div>
            ​        </div>
                )
            }
        </>
    )
}

export default BusinessCard2