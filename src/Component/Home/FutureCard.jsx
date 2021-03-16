import React from "react"
import styles from "../Styles/future.module.css"
import { BiChevronRight } from "react-icons/bi";
const FutureCard = ({data})=>{
    return(
        <>

        { data.length!==0 && (<div className={styles.main}>
            
                <img src = "https://ychef.files.bbci.co.uk/976x549/p0836dcl.jpg" style={{zIndex:"0",width:"100%",height:"400px"}} alt="news poster"/>
                <div className={styles.top}>
                    <div>
                        <p style={{color:"white",fontSize:"30px",fontWeight:"bold",margin:"0px",border:"3px solid rgb(61,110,75)",textAlign:"center"}}>FUTURE PLANET</p>
                        <p style={{color:"white"}}>Solutions for a sustainable world</p>
                    </div>
                    <div className={styles.visit}>
                        <p className={styles.para}> Visit Future  </p><BiChevronRight style={{margin:"7px 2px"}}/>
                    </div>
                    
                </div>
                <div className={styles.cards}>
                    <div className={styles.single}>
                        <img src = {data[16].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[16].img[0].img_tag}</p>
                        </div>
                    </div>
                    <div className={styles.single}>
                        <img src = {data[17].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[17].img[0].img_tag}</p>
                        </div>
                    </div>
                    <div className={styles.single}>
                        <img src = {data[18].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[18].img[0].img_tag}</p>
                        </div>
                    </div>
                
                </div>
           
        </div>)}

        </>
    )
}
export default FutureCard