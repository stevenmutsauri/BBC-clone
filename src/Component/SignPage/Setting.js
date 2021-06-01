import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { loginData, loginSuccess } from '../../Redux/Auth/Action'
import { Redirect } from 'react-router'
function Setting() {
    const dispatch =useDispatch()
    const [password,setPassword]=React.useState("")
    const {data_auth}=useSelector(state=>state.login)
    const [delete_acc,setDelete]=React.useState(false)
    const {isAuth}=useSelector(state=>state.login)
    const handleDelete=()=>{
        setDelete(true)
    }
    const handleCancel=()=>{
        setDelete(false)
    }
    const handleChangePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleDeleteAccount=()=>{
        if(password==data_auth[0].password){
            axios.delete(`https://bbc-db.herokuapp.com//ApiAuth/${data_auth[0].id}`)
            .then(res=>{
                (alert("deleted successfully"))
                dispatch(loginSuccess(false))
                dispatch(loginData([]))
            })
        }
        else{
            alert("wrong Password")
        }
    }
    return isAuth?(!delete_acc?(
        <div className={"data_personal"}>
            <h1>Personal Detailes</h1>
            <label>Email</label>
            <br/>
            <input value={data_auth[0].email}/>
            <button className={"dete_btn"}>edit </button>
            <br/>
            <label>Password</label>
            <br/>
            <input value={data_auth[0].password} type="password"/>
            <button className={"dete_btn"}>edit </button>
            <br/>
            <label>Date-of-Birth</label>
            <br/>
            <input value={data_auth[0].dob}/>
            <h4>Delete your Account</h4>
            <button className={"dete_btn"} onClick={handleDelete}>I want to delete my account</button>
        </div>
    ):<div className={"data_personal"}>
        <h2>Delete Your Account</h2>
        <p>We're sorry to see you go. Keep in mind…</p>
        <ul className={"ui"}>
            <li>This will remove your account on all devices</li>
            <li>The BBC won't be personalised to you any more</li>
            <li>You need an account for BBC iPlayer and BBC Sounds</li>
            <li>This can't be undone</li>
        </ul>
        <h5>Enter your password to delete your account</h5>
        <input value={password} placeholder="Password" onChange={handleChangePassword}/><br/>
        <button className={"delete_btn"} onClick={handleDeleteAccount}>DELETE</button>
        <button className={"cancel_btn"} onClick={handleCancel}>Cancel</button>
    </div>):<Redirect to={"/"}/>
}

export default Setting
