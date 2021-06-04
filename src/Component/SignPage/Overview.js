import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { getNewsDataPost, newsDataAdmin } from '../../Redux/Auth/Action'

function Overview() {
    const {data_auth,isAuth}=useSelector(state=>state.login)
    const date=new Date().toLocaleDateString()
    const dispatch = useDispatch()
    const history = useHistory()
    const imageRef=React.useRef()
    const post_data={
        headline:"",
        description:"",
        published_at:"",
        category:"",
        sub_category:"",
        img:[
            {
            img_url:"",
            img_tag:""
            },
            {
            img_url:"bha",
            img_tag:""
            }
        ],
        article_data:[
            {
                sub_title:"",
                sub_description:""
            },
            {
                sub_title:"",
                sub_description:""
            }
        ]
    }
    console.log(post_data.img[1])
    const [data_post,setData_post]=React.useState(post_data)
    const handlePastChange=(e)=>{
        
        const {name,value}=e.target
        const payload={
            ...data_post,
            [name]:value
        }
        
        setData_post(payload)
    }
    const handlePostData=(e)=>{
        
        e.preventDefault()
       
        console.log(data_post)

        dispatch(newsDataAdmin(data_post))
        .then(res => alert("Successfully posted the headline!!"))
    
    }  
    
    React.useEffect(()=>{
    dispatch(getNewsDataPost())
    },[])
    return isAuth?(
        <>
            <div className={"Overview_background"}>
                <img src="https://static.files.bbci.co.uk/account/id-profile/1060/css/img/david-attenborough-16x9-1700x956.jpg" alt=""account/>
            </div>
            {data_auth[0].category!="admin"?<div>
                <h1>You Can See Here If you Comment Any News</h1>
            </div>:
            <div className={"post_data"}>
                <h1>Post The data</h1>
                <form onSubmit={handlePostData}>
                    <label>Headline</label><br/>
                    <input name="headline" placeholder="write headline" value={data_post.hedlines} type="text" onChange={handlePastChange}/><br/>
                    <label>Description</label><br/>
                    <textarea name="description" placeholder="write description" value={data_post.description} type="text" onChange={handlePastChange}/><br/>
                    <input type="submit" className={"post_data_submit"}/>
                </form>
            </div>}
        </>
    ):<Redirect to={"/"}/>
}

export default Overview
