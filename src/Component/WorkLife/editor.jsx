import React from "react"
import styles from "./editor.module.css"

const Editor = ({data})=>{
    // console.log(data)
    return(
        <>
            {data.length!==0 && (
                <div className={styles.main}>
                    <div className={styles.work}><p >WORK LIFE</p></div>
                    <p style={{color:"rgb(2,2,3)",fontSize:"15px"}}>Editor's   Picks</p>
                    <div className={styles.inner}>
                        <div className={styles.uper}>
                            <img src = {data[3].img1} className={styles.img1} alt="worklife poster"/>
                            <div className={styles.onimg}>
                                <p style={{fontSize:"20px",color:"rgb(46,46,46)"}}>{data[3].category}</p><br></br><br></br>
                                <p style={{fontSize:"30px",color:"rgb(46,46,46)"}}>{data[3].heading}</p><br></br><br></br>
                                <p style={{fontStyle:"italic",fontSize:"13px"}}>By - {data[3].author}</p>
                            </div>
                        </div>
                        <div className={styles.bottom}>
                            <div className={styles.boxes}>
                                <img src={data[4].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[4].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[4].author}</p>
                                </div>
                            </div>
                            <div className={styles.boxes}>
                                <img src={data[5].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[5].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[5].author}</p>
                                </div>
                            </div>
                            <div className={styles.boxes}>
                                <img src={data[6].img1} className={styles.boximg} alt="worklife poster"/>
                                <div>
                                    <p>{data[6].heading}</p>
                                    <div style={{width:"70%",margin:"15px 0px 10px"}}>
                                    <hr></hr>
                                    </div>
                                    <p style={{fontStyle:"italic",fontSize:"13px",textAlign:"left"}}>By - {data[6].author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Editor