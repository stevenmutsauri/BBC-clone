import React from "react"
import styles from "../Styles/welcomecard.module.css"
import { useHistory } from "react-router"
const WelcomeCard = ({data})=>{
    const date = new Date()
    const month = date.getMonth()
    const mnth = Number(month)+1
     const dd = date.getDate()
    const year = date.getFullYear()
    
    const history = useHistory()
    const handleClick = (id) => {
        return history.push(`/news/${id}`)
    }
    return(
        <>
            {data[0]!== undefined && (<>
                <div style={{textAlign:"left",margin:"35px auto",fontSize:"30px",fontWeight:"bolder",color:"rgb(74,74,74)",display:"flex",justifyContent:"space-between",width:"92%"}}>
                    <p>Welcome to BBC.com</p>
                     <p>{dd +"/"+ mnth+"/"+year}</p>
                </div>
                <div className={styles.outermain}>
                    <div  key={data[0].id} onClick ={(e) => handleClick(data[0].id)} className={styles.innermain}>
                        <div style={{margin:"320px 10px",textAlign:"left"}}>
                            <p >{data[0].headline}</p>
                            <p style={{fontWeight:"normal"}}>{data[0].img[0].img_tag}</p>
                            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>

                                <div style={{width:"0px",height:"17px",borderLeft:"2px solid red",paddingLeft:"8px"}}>India</div>
                            </div>
                        </div>
                    </div>


                    
                    <div className={styles.innermainRight}>


                        <div key={data[1].id} className={styles.box1} onClick ={(e) => handleClick(data[1].id)}>
                            <div  className={styles.innermain1}>
                        
                                <img src = {data[1].img[0].img_url} style={{width:"100%",height:"210px",zIndex:"0"}} alt="news poster"/>
                                <div style={{margin:"-90px 10px",textAlign:"left",color:"white",fontSize:"18px"}}>
                                    <p style={{zIndex:"2",fontWeight:"normal",fontSize:"15px"}}>{data[1].headline}</p>
                                    
                                <div style={{width:"0px",height:"17px",borderLeft:"3px solid red",paddingLeft:"8px",margin:"-5px 3px",color:"white"}}>{data[1].category}</div>
                                </div>
                            </div>

                            <div  key={data[2].id}className={styles.innermain1} onClick ={(e) => handleClick(data[2].id)}>
                        
                                <img src = {data[2].img[0].img_url} style={{width:"100%",height:"210px",zIndex:"0"}} alt="news poster"/>
                                <div style={{margin:"-90px 10px",textAlign:"left",color:"white",fontSize:"18px"}}>
                                    <p style={{zIndex:"2",fontWeight:"normal",fontSize:"15px"}}>{data[2].headline}</p>
                                    
                                <div style={{width:"0px",height:"17px",borderLeft:"3px solid blue",paddingLeft:"8px",margin:"-5px 3px",color:"white"}}>{data[1].category}</div>
                                </div>
                            </div>
                            </div>

                            <div key={data[3].id}className={styles.box2} onClick ={(e) => handleClick(data[3].id)}>
                                <div className={styles.innermain1}>
                            
                                    <img src = {data[3].img[0].img_url} style={{width:"100%",height:"210px",zIndex:"0"}} alt="news poster"/>
                                    <div style={{margin:"-90px 10px",textAlign:"left",color:"white",fontSize:"18px"}}>
                                        <p style={{zIndex:"2",fontWeight:"normal",fontSize:"15px"}}>{data[3].headline}</p>
                                        
                                    <div style={{width:"0px",height:"17px",borderLeft:"3px solid blue",paddingLeft:"8px",margin:"-5px 3px",color:"white"}}>{data[3].category}</div>
                                    </div>
                                </div>


                                <div key={data[4].id} className={styles.innermain1} onClick ={(e) => handleClick(data[4].id)}>
                            
                                    <img src = {data[4].img[0].img_url} style={{width:"100%",height:"210px",zIndex:"0"}} alt="news poster"/>
                                    <div style={{margin:"-110px 10px",textAlign:"left",color:"white",fontSize:"18px"}}>
                                        <p style={{zIndex:"2",fontWeight:"normal",fontSize:"15px"}}>{data[4].headline}</p>
                                        
                                    <div style={{width:"0px",height:"17px",borderLeft:"3px solid blue",paddingLeft:"8px",margin:"-5px 3px",color:"white"}}>{data[4].category}</div>
                                    </div>
                                </div>
                            </div>
                    </div>
            

                </div>
              
           </> )}
        </>
    )

}
export default WelcomeCard