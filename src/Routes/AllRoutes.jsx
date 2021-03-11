import React from "react";

import { Route, Switch } from "react-router";
import SingleDescription from "../Component/Search/SingleDescription";
import SearchListPage from "./SearchListPage";
import { NewsMain } from "../Component/News/NewsHome/NewsMain";
import { Home } from "./Home";
import ReelPage from "../Component/Reel/ReelPage";

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
          <NewsMain />
        </Route>
        <Route path="/reel" exact>
            <ReelPage></ReelPage>
        </Route>
        <Route>
          <h1>page not found</h1>
        </Route>
      </Switch>
    </div>
  );
}
