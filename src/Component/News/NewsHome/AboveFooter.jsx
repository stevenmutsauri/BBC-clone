import React from 'react'
import styles from "../../Styles/aboveFooter.module.css"
import {FaTwitter} from "react-icons/fa"
import {ImFacebook,ImMobile} from "react-icons/im"
import {IoLogoInstagram} from "react-icons/io"
import {GoMailRead} from "react-icons/go"

const AboveFooter = () => {
    return (
        <div>
            <h2 className={styles.h2}>Find us here</h2>
            <div className={styles.wrapper}>
                <div className={styles.shareIcons}>
                    < div className={styles.share}><div><FaTwitter size="40px"  className={styles.iconsOnTwitter} style={{color:"rgb(29,161,242)"}}/></div></div>
                    <div  className={styles.share}><div><ImFacebook size="40px"  className={styles.iconsOnFb} style={{color:"rgb(61,90,152)"}}/></div></div>
                    <div   className={styles.share}><div><IoLogoInstagram size="40px"  className={styles.iconsOnInsta} style={{color:"rgb(217,49,117)"}}/></div></div>
                </div>
                <div className={styles.sending_dataways}>
                    <div className={styles.sending_dataways_container}>
                        <div className={styles.sending_dataways_wrap}>
                            <div>
                                <GoMailRead size="40px"/>
                            </div>
                            <div className={styles.sending_dataways_heading} >NEWS DAILY</div>
                        </div>
                        <div> 
                            Get news from the BBC in your inbox each weekday morning
                        </div>
                    </div>
                    <div className={styles.sending_dataways_container}>
                        <div className={styles.sending_dataways_wrap}>
                            <div >
                                <ImMobile size="40px"/>
                            </div>
                            <div className={styles.sending_dataways_heading} >NEWS APP</div>
                        </div>
                        <div> 
                            Find out more about BBC News App 
                        </div>
                    </div>
                    <div className={styles.sending_dataways_address}>
                        <li>Email us at <span> haveyoursay@bbc.co.uk</span></li>
                        <li>Send an SMS or MMS to <span> +44 7624 800100</span></li>
                        <li>Follow <span>Have Your Say on Twitter</span></li>
                        <li><span>Why you can trust BBC News</span></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboveFooter
