import React from 'react'
import { BiSearch } from 'react-icons/bi'
import style from "../Styles/navbar.module.css"



export default function SearchBar() {
    return (
        <div className={style.search}>
            <input type="text" placeholder="Search"/>
            <BiSearch/>
        </div>
    )
}
