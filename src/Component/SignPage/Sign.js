import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router'
import  './Sign.css'
import { useDispatch, useSelector } from 'react-redux'
import { loginData, loginSuccess } from '../../Redux/Auth/Action'
function Sign() {
    const dispatch = useDispatch()
    const {data_auth,isAuth}=useSelector(state=>state.login)
    const [get_data,setGet_data]=React.useState([])
    React.useEffect(()=>{
        getDataFilter()
    },[])

    const getDataFilter=()=>{
        axios.get("https://fake---api.herokuapp.com/ApiAuth")
        .then(res=>setGet_data(res.data))
    }
    console.log(get_data)
    const payload={
        email:"",
        password:""
    }
    const registerData={
        name:"",
        dob:"",
        email:"",
        password:"",
        category:""
    }
    const [Email,setEmail]=React.useState(payload)
    const {email,password}=Email
    const [auth,setAuth]=React.useState(false)
    const [exit,setExit]=React.useState(false)
    const [register,setRegister]=React.useState(false)
    const [regiterDat,setRegisterDat]=React.useState(registerData)
    const [next,seNext]=React.useState(false)
    const [changemail,setMail]=React.useState(false)
    const handleChangeRegister=(e)=>{
        const {name,value} = e.target
        console.log(e.target.value,e.target.name)
        if(name=="email"){
            let updatemail=get_data.filter(e=>e.email==value)
            if(updatemail.length!=0){
                setMail(true)
            }
            else{
                setMail(false)
            }
        }
        setRegisterDat({
            ...regiterDat,
            [name]:value
        })
    }
    console.log(regiterDat)
    const handleChange= (e)=>{
        const {name,value}=e.target
        setEmail({
            ...Email,
            [name]:value
        })
    }
    const handleSubmitRegister=(e)=>{
        e.preventDefault()
        axios.post(`https://fake---api.herokuapp.com/ApiAuth`,regiterDat)
        .then(res=>{
            seNext(!next)
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        axios.get(`https://fake---api.herokuapp.com/ApiAuth?email=${email}&password=${password}`)
        .then(res=>{
            const data=res.data
            if(data.length==0){
                setAuth(!auth)
            }
            else{
                setAuth(false)
                dispatch(loginData(data))
                dispatch(loginSuccess(true))
            }
        })
    }
    const handleExit=()=>{
        setExit(!exit)
    }
    const handleRegister=()=>{
        setRegister(!register)
    }


    const handleContinue=()=>{
        setRegister(!register)
        seNext(!next)
    }
    return !isAuth?(
        
        <div className={"signin_back"}>
            <div className={"exit_btn"}>
                <button onClick={handleExit}>x</button>
            </div>
            <div className={"login_box"}>
                <img src="data:image/png;base64,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" alt="logo"/>
                {!register?<><h2>Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <input value={email} name="email" placeholder="Email or Username" type="email" onChange={handleChange}/>
                    <br/>
                    <input value={password} name="password" placeholder="Enter password" type="password" onChange={handleChange}/>
                    <br/>
                    {auth && <p className="verify_data">Enter vaild email or password</p>}
                    <br/>
                    <input type="submit" value="Sign In" className={"sign_btn"}/>
                </form>
                <h6>Need help signning in?</h6>
                <hr/>
                <h5>Don’t have a BBC account?</h5>
                <button onClick={handleRegister}><b>register now?</b></button>
                </>:!next?<>
                <h3>Register With BBC</h3>
                <form onSubmit={handleSubmitRegister}>
                    <input value={regiterDat.name} name="name" placeholder="Username" type="text" onChange={handleChangeRegister}/>
                    <br/>
                    <input value={regiterDat.dob} name="dob" placeholder="Date of Birth" type="date" onChange={handleChangeRegister}/>
                    <br/>
                    <input value={regiterDat.email} name="email" placeholder="Email or Username" type="email" onChange={handleChangeRegister}/>
                    {changemail&&<p className={"verify_data"}>already is there, Please Login or change Mail</p>}
                    <br/>
                    <input value={regiterDat.password} name="password" placeholder="Enter password" type="password" onChange={handleChangeRegister}/>
                    <br/>
                    <select name="category" onChange={handleChangeRegister}>
                        <option>---Select One---</option>
                        <option  value="premimum">PREMIUM</option>
                        <option  value="normal">NORMAL</option>
                    </select>
                    <br/>
                    <input type="submit" value="Create An Account" className={"sign_btn"}/>
                </form>
                </>:<><h2>Created Successfully</h2><button onClick={handleContinue}>Continue</button></>}
            </div>
            {exit && <Redirect to="/news"/>}
        </div>
    ):<Redirect to="/news"/>
}

export default Sign
