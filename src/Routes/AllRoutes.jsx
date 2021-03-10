import React from 'react'
import { Route, Switch } from 'react-router'
import SearchListPage from './SearchListPage'

export default function AllRoutes() {
    return (
        <div>
            <Switch>
                <Route path="/search" exact>
                <SearchListPage>
                    hi
                </SearchListPage>
                </Route>
                <Route>
                    <h1>page not found</h1>
                </Route>
            </Switch>
        </div>
    )
}
