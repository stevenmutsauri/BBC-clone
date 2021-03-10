import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Styles/navbar.module.css";


const linksDrop=[
    {
        to:"/culture./music",
        title:"Music"
    },
    {
        to:"/tv",
        title:"TV"
    },
    {
        to:"/weather",
        title:"Weather"
    },
    {
        to:"/sounds",
        title:"Sounds"
    },
]
export default function Dropdown() {
    return (
        <div className={style.dropdown}>
            <div>MORE</div>
           <div> {linksDrop?.map(({to,title},index)=><Link className={style.dropdown__right} to={to}>{title}</Link>)}</div>
        </div>
    )
}
