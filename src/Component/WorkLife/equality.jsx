import React from "react"
import styles from "./equality.module.css"

const Equality = ({data})=>{
    // console.log(data)
    return(
        <>
            {data.length!==0 && (
                <div className={styles.main}>
                    <div className={styles.inrdiv}>
                        <p style={{color:"white",fontWeight:"bold"}}>Equality Matters</p>
                        <div className={styles.boxes}>
                            <div className={styles.box}>
                                <img src = {data[0].img2} alt="worklife poster"/>
                                <div style={{color:"white",margin:"20px 0px",textAlign:"left"}}>
                                    <p>{data[0].category}</p><br></br>
                                    <p>{data[0].heading}</p><br></br><br></br><br></br>
                                    
                                    
                                    <hr></hr>    
                                    
                                    <br></br>                                
                                    <p style={{fontStyle:"italic"}}>By - {data[0].author}</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img src = {data[4].img2}  alt="worklife poster"/>
                                <div style={{color:"white",margin:"20px 0px",textAlign:"left"}}>
                                    <p>{data[4].category}</p><br></br>
                                    <p>{data[4].heading}</p><br></br><br></br>
                                    
                                       
                                    <br></br>                                
                                    <hr></hr>    
                                    <br></br>
                                    <p style={{fontStyle:"italic"}}>By - {data[4].author}</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img src = {data[2].img2} alt="worklife poster"/>
                                <div style={{color:"white",margin:"20px 0px",textAlign:"left"}}>
                                    <p>{data[2].category}</p><br></br>
                                    <p>{data[2].heading}</p><br></br><br></br><br></br>
                                    

                                    <hr></hr>    
                                    
                                    <br></br>                                
                                    <p style={{fontStyle:"italic"}}>By - {data[2].author}</p>
                                </div>
                            </div>
                            <div className={styles.box}>
                                <img src = {data[3].img2} alt="worklife poster"/>
                                <div style={{color:"white",margin:"20px 0px",textAlign:"left"}}>
                                    <p>{data[3].category}</p><br></br>
                                    <p>{data[3].heading}</p><br></br><br></br><br></br>
                                    <br></br>                                
                                    <hr></hr>  
                                    <br></br>  
                                    <p style={{fontStyle:"italic"}}>By - {data[3].author}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )}
        </>
    )
}
export default Equality