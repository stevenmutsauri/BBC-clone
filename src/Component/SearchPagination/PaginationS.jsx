import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io';
import style from "../Styles/button.module.css"

export default function PaginationS({currentPage,totalPages,baseUrl}) {
    
    const getBtns=()=>{
        var arr=[]
        for(let i=1;i<=totalPages;i++){
            arr.push(<Link to={baseUrl+"&page="+i}><button className={style.pages__btn} className={currentPage==i?style.active__btn:style.passive__btn}>{i}</button></Link>)
        }
        return arr
    }
    return (
        <div>
           {currentPage>1&&<Link  to={baseUrl+"&page="+(currentPage-1)}><button className={style.prev__btn}><IoIosArrowForward/></button></Link>}
            {getBtns()}
            {currentPage<totalPages&&<Link  to={baseUrl+"&page="+(currentPage+1)}><button className={style.next__btn}><IoIosArrowForward/></button></Link>}
        </div>
    )
}
