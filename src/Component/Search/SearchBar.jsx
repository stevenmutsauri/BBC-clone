import React from 'react'
import { BiSearch } from 'react-icons/bi';
import style from "../Styles/navbar.module.css"
import { Link } from 'react-router-dom';

export default function SearchBar({className=style.search}) {
    const [searchQuery,setSeacrchQuery]= React.useState("")

    const handleSearch=()=>{

    }
    return (
        <div className={className}>
            <input type="text" placeholder="Search" name="searchQuery" value={searchQuery} onChange={(e)=>{setSeacrchQuery(e.target.value)}} />
            <Link to={`/search?q=${searchQuery}`}> <div onClick={handleSearch} className={style.search__icon}><BiSearch/></div></Link>
        </div>
    )
}
