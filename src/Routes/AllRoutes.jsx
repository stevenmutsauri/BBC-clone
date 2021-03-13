import React from "react";
import { Route, Switch } from "react-router";
import SingleDescription from "../Component/Search/SingleDescription";
import SearchListPage from "./SearchListPage";
import { Home } from "./Home";
import ReelPage from "../Component/Reel/ReelPage";
import Sign from '../Component/SignPage/Sign'
import Account from '../Component/SignPage/Account'
import Overview from '../Component/SignPage/Overview'
import Settings from '../Component/SignPage/Setting'
import Work from "../Component/WorkLife/Work";

import { News } from "./News";
import { NewsSingleArticles } from "../Component/News/NewsArticles/NewsSingleArticles";

export default function AllRoutes() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/search" exact>
          <SearchListPage></SearchListPage>
        </Route>
        <Route path="/singleArticle/:singleId" exact>
          <SingleDescription></SingleDescription>
        </Route>
        <Route path="/news" exact>
             <News />
        </Route>
        <Route path="/reel" exact>
            <ReelPage></ReelPage>
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
                <Settings/>
            </Route>
            <Route path="/Account/Comments">
            <Account/>
                <h3>Comments</h3>
            </Route>
            <Route>
              <Work/>
            </Route>
         
        <Route path="/news/:category-:id" >
          <NewsSingleArticles/>
        </Route>
    </div>
  );
}
