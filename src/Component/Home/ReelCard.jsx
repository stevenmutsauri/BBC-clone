import React from "react"
import styles from "../Styles/reel.module.css"
import { BiChevronRight } from "react-icons/bi";
const ReelCard = ({data})=>{
    return(
        <>

        {data.length!==0 && (
            <>
        <div className={styles.main}>
            
                <img src = "https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg" style={{zIndex:"0",width:"100%",height:"400px"}} alt="news poster"/>
                <div className={styles.top}>
                    <div>
                        <p style={{color:"white",fontSize:"40px",fontWeight:"bold",margin:"0px"}}>REEL</p>
                        <p style={{color:"white"}}>The most amazing videos from the BBC</p>
                    </div>
                    <div className={styles.visit}>
                        <p className={styles.para}> Visit Reel  </p><BiChevronRight style={{margin:"7px 2px"}}/>
                    </div>
                    
                </div>
                <div className={styles.cards}>
                    <div className={styles.single}>
                        <img src = {data[7].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[7].img[0].img_tag}</p>
                        </div>
                    </div>
                    <div className={styles.single}>
                        <img src = {data[8].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[8].img[0].img_tag}</p>
                        </div>
                    </div>
                    <div className={styles.single}>
                        <img src = {data[9].img[0].img_url} style={{width:"100%",height:"220px",margin:"0px"}} alt="news poster"/>
                        <div className={styles.imgtags}>
                            <p className={styles.para1}>{data[9].img[0].img_tag}</p>
                        </div>
                    </div>
                
                </div>
           
        </div>
        </>)}

        </>
    )
}
export default ReelCard