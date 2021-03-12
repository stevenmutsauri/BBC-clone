import React from 'react'
import {Route, Switch} from "react-router-dom"
import { NewsMain } from '../Component/News/NewsHome/NewsMain'

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route path="/news" exact>
                    <NewsMain/>
                </Route>
            </Switch>
        </div>
    )
}

export {AllRoutes}
