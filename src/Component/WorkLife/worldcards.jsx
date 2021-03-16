import React from "react"
import styles from "./world.module.css"

const WorldCards = ({data})=>{
    // console.log(data)
    return(
        <>
            {data.length!==0 && (
                <div className={styles.main}>
                    <div className={styles.work}><p >WORK LIFE</p></div>
                    <p style={{color:"rgb(2,2,3)",fontSize:"15px"}}>Thriving World</p>
                    <div className={styles.inner}>
                        <div className={styles.uper}>
                            <img src = {data[0].img1} className={styles.img1} alt="worklife poster"/>
                            <div className={styles.onimg}>
                                <p style={{fontSize:"20px",color:"rgb(46,46,46)"}}>{data[0].category}</p><br></br><br></br>
                                <p style={{fontSize:"30px",color:"rgb(46,46,46)"}}>{data[0].heading}</p><br></br><br></br>
                                <p style={{fontStyle:"italic",fontSize:"13px"}}>By - {data[0].author}</p>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.boxes}>
                                <img src={data[8].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[8].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[8].author}</p>
                                </div>
                            </div>
                            <div className={styles.boxes}>
                                <img src={data[7].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[7].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[7].author}</p>
                                </div>
                            </div>
                            <div className={styles.boxes}>
                                <img src={data[2].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[2].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[2].author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default WorldCards