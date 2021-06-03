import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Redirect, useHistory } from 'react-router-dom'
import { loginData, loginSuccess } from '../../Redux/Auth/Action.js'
import "./Sign.css"
function Account() {
    const {isAuth}=useSelector(state=>state.login)
    const dispatch=useDispatch()
    const history = useHistory()
    const handleSignout=()=>{
        dispatch(loginData([]))
        dispatch(loginSuccess(false))
        return history.replace("/")
    }
    
    return (
        <div className={"account_bar"}>
            <div className={"your_account"}>
                <b>Your Account</b>
            </div>
            <div>
            <Link to={"/Account/Overview"} className={"account_link"}>Overview</Link>
            
            <Link to={"/Account/Settings"} className={"account_link"}>Settings</Link>
            <Link to={"/Account/Comments"} className={"account_link"}>Comments</Link>
            {isAuth?<button className={"signout_btn"} onClick={handleSignout}>Sign Out</button>:<Redirect to={"/"}/>}
            </div>
        </div>
    )
}

export default Account
