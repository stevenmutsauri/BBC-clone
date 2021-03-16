import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {fetchNewsData} from "../../Redux/app/action"
import WelcomeCard from "./welcomeCard"
import styles from "../Styles/welcomecard.module.css"


const Welcome = ()=>{
    const dispatch = useDispatch()
    const data = useSelector((state)=>state.app.data)
    const loading = useSelector((state)=>state.app.isLoading)
    const error = useSelector((state)=>state.app.isError)
    
    React.useEffect(()=>{
        dispatch(fetchNewsData())
    },[])
    
    let items = []
    items.push( ...data.splice(0,5))

    return loading?(<img alt="loading indicator" src = "https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif" style={{width:"18%",height:"150px"}}/>):error?(<p>An error occured</p>):(
        <>
            
            <div className={styles.main}>
                        <WelcomeCard data={items}/>
            </div>
        </>
    )
}

export default Welcome