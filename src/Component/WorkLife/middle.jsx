import React from "react"
import styles from "./mid.module.css"
const Middle = ()=>{
    return(
        <div className={styles.main}>
            <img alt="worklife poster" className={styles.main__img} src="https://ychef.files.bbci.co.uk/1600x900/p095xbzq.webp" width="100%" height="400px" />
            <div className={styles.centerdiv}>
                <br></br><br></br><br></br>
                <p>HOW WE LIVE</p><br></br><br></br>
                <p style={{fontSize:"40px"}}>The Nordic way to help de-stress</p><br></br><br></br>
                <p style={{fontStyle:"italic",fontWeight:"normal"}}>By Barbara Woolsey</p>
            </div>
        </div>
    )
}
export default Middle