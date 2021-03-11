import React from 'react'

import { Route, Switch } from 'react-router'
import SingleDescription from '../Component/Search/SingleDescription'
import SearchListPage from './SearchListPage'
import { NewsMain } from '../Component/News/NewsHome/NewsMain'

export default function AllRoutes() {
    return (
        <div>
            <Switch>
                <Route path="/search" exact>
                <SearchListPage>
                    hi
                </SearchListPage>
                </Route>
                <Route path="/singleArticle/:singleId">
                   <SingleDescription></SingleDescription>
                </Route>
                <Route path="/news" exact>
                    <NewsMain/>

                </Route>
                <Route>
                    <h1>page not found</h1>
                </Route>
                </Switch>



        </div>
    )
}

