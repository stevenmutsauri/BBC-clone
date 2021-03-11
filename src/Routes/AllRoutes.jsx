import React from 'react'
import {Route, Switch} from "react-router-dom"
import { NewsMain } from '../Component/News/NewsHome/NewsMain'
import Sign from '../Component/SignPage/Sign'
import Account from '../Component/SignPage/Account'
import Overview from '../Component/SignPage/Overview'


const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/news" exact>
                    <NewsMain/>
                </Route>


                <Route path="/Sign">
                <Sign/>
            </Route>
            <Route path="/Account" exact>
                <Account/>
                <Overview/>
            </Route>
            <Route path="/Account/Overview" exact>
                <Account/>
                <Overview/>
            </Route>
            <Route path="/Account/Settings">
            <Account/>
                <h3>Settings</h3>
            </Route>
            <Route path="/Account/Comments">
            <Account/>
                <h3>Comments</h3>
            </Route>
            </Switch>
        </div>
    )
}

export {AllRoutes}
