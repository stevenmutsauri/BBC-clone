import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Redirect } from 'react-router'
import { getNewsDataPost, newsDataAdmin } from '../../Redux/Auth/Action'

function Overview() {
    const {adminAuthData,data_auth,isAuth}=useSelector(state=>state.login)
    const date=new Date().toLocaleDateString()
    const dispatch = useDispatch()
    console.log("pranit")
    console.log(adminAuthData)
    // const {isAuth}=useSelector(state=>state.login)
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
        
        const {name,value,files}=e.target
        // var payload={...data_post}
        // if(name=="file1"){
        //     payload={
        //         ...data_post,
        //         img:[{
        //             ...data_post.img[0],
        //             img_url:files[0].name
        //         },
        //         {
        //             ...data_post.img[1]
        //         }]
        //     }
        // }
        // else if(name=="file2"){
        //     payload={
        //         ...data_post,
        //         img:[{
        //             ...data_post.img[0]
        //             },
        //             {
        //             ...data_post.img[1],
        //             img_url:files[0].name
        //         }]
        //     }
        // }
        // else if(name=="image1_tag"){
        //     payload={
        //         ...data_post,
        //         img:[{
        //             ...data_post.img[0],
        //             img_tag:value
        //         },
        //         {
        //             ...data_post.img[1]
        //         }]
        //     }
        // }
        // else if(name=="image2_tag"){
        //     payload={
        //         ...data_post,
        //         img:[{
        //             ...data_post.img[0],
        //         },
        //         {
        //             ...data_post.img[1],
        //             img_tag:value
        //         }]
        //     }
        // }
        // else if(name=="sub1_title"){
        //     payload={
        //         ...data_post,
        //         article_data:[{
        //             ...data_post.article_data[0],
        //             sub_title:value
        //         },
        //         {
        //             ...data_post.article_data[1]
        //         }]
        //     }
        // }
        // else if(name=="sub1_description"){
        //     payload={
        //         ...data_post,
        //         article_data:[{
        //             ...data_post.article_data[0],
        //             sub_description:value
        //         },{
        //             ...data_post.article_data[1]

        //         }]
        //     }
        // }
        // else if(name=="sub2_title"){
        //     payload={
        //         ...data_post,
        //         article_data:[{
        //             ...data_post.article_data[0],
        //         },
        //         {
        //             ...data_post.article_data[1],
        //             sub_title:value

        //         }]
        //     }
        // }
        // else if(name=="sub2_description"){
        //     payload={
        //         ...data_post,
        //         article_data:[{
        //             ...data_post.article_data[0],
        //         },{
        //             ...data_post.article_data[1],
        //             sub_description:value
        //         }
        //         ]
        //     }
        // }
        // else if("published_at"==name){
        //     const date=new Date().toLocaleDateString().split("/")
        //     var temp=date[0]
        //     date[0]=date[1]
        //     date[1]=temp
        //     payload={
        //         ...data_post,
        //         published_at:date.join("/")
        //     }
        // }
        // else{
           const payload={
                ...data_post,
                [name]:value
            }
        // }
        
        setData_post(payload)
    }
    const handlePostData=(e)=>{
        
        e.preventDefault()
       
        console.log(data_post)
        dispatch(newsDataAdmin(data_post))
        
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
                    {/* <label>Category</label><br/>
                    <select name="category" onChange={handlePastChange}>
                        <option>---Select One---</option>
                        <option value="Asia">Asia</option>
                        <option value="America">America</option>
                        <option value="England">England</option>
                        <option value="Africa">Africa</option>
                    </select><br/>
                    <label>Sub_Category</label><br/>
                    <select name="sub_category" onChange={handlePastChange}>
                        <option>---Select One---</option>
                        <option value="India">India</option>
                        <option value="Mexico">Mexico</option>
                        <option value="France">France</option>
                        <option value="Africa">Africa</option>
                    </select><br/>
                    <label>Publish</label><br/>
                     <input value={date} name="published_at" onChange={handlePastChange}/> 
                    <br/>
                    <lable>image1</lable><br/>
                    <input name="file1"  type="file" onChange={handlePastChange} ref={imageRef}/><br/>
                    <label>image1 Tag</label><br/>
                    <input name="image1_tag" value={data_post.img[0].img_tag} type="text" onChange={handlePastChange}/><br/>
                    <lable>image2</lable><br/>
                    <input name="file2"  type="file" onChange={handlePastChange}/><br/>
                    <label>image2 Tag</label><br/>
                    <input name="image2_tag" value={data_post.img[1].img_tag} type="text" onChange={handlePastChange}/><br/>
                    <lable>sub title 1</lable><br/>
                    <input name="sub1_title" value={data_post.article_data[0].sub_title} type="text" onChange={handlePastChange}/><br/>
                    <label>sub description 1</label><br/>
                    <input name="sub1_description" value={data_post.article_data[0].sub_description} type="text" onChange={handlePastChange}/><br/>
                    <lable>sub title 2</lable><br/>
                    <input name="sub2_title" value={data_post.article_data[1].sub_title} type="text" onChange={handlePastChange}/><br/>
                    <label>sub description 2</label><br/>
                    <input name="sub2_description" value={data_post.article_data[1].sub_description} type="text" onChange={handlePastChange}/><br/>
                     */}
                    <input type="submit" className={"post_data_submit"}/>
                </form>
            </div>}
        </>
    ):<Redirect to={"/"}/>
}

export default Overview
