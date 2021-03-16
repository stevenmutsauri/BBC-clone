import React from 'react'
import { Link } from 'react-router-dom'
import style from "../Component/Styles/noPage.module.css"

export default function PageNot() {
    return (
        <div>
            <div className={style.blue}>
                <div>404 Not Found</div>
            </div>
            <div className={style.empty}></div>
            <div className={style.no__page__wrap}>
                <img className={style.nopage__img} src="/noPage.jpg" alt="no-img"/>
                <h3>Sorry, we couldn’t find that page</h3>
                <div>Check the page address or search for it below</div>
               
                <Link to="/">BBC HomePage</Link>
                
            </div>
        </div>
    )
}
