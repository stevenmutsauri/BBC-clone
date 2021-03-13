import React from "react";

import { Route, Switch } from "react-router";
import SingleDescription from "../Component/Search/SingleDescription";
import SearchListPage from "./SearchListPage";
import { NewsMain } from "../Component/News/NewsHome/NewsMain";
import { Home } from "./Home";
import ReelPage from "../Component/Reel/ReelPage";
import Sign from "../Component/SignPage/Sign";
import Account from "../Component/SignPage/Account";
import Overview from "../Component/SignPage/Overview";
import SingleReel from "../Component/Reel/SingleReel";
import PageNot from "./PageNot";

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
        <Route path="/news/:singleId" exact>
          <SingleDescription></SingleDescription>
        </Route>
        <Route path="/news" exact>
          <NewsMain />
        </Route>
        <Route path="/reel" exact>
          <ReelPage></ReelPage>
        </Route>
        <Route path="/Sign">
          <Sign />
        </Route>
        <Route path="/Account" exact>
          <Account />
          <Overview />
        </Route>
        <Route path="/Account/Overview" exact>
          <Account />
          <Overview />
        </Route>
        <Route path="/Account/Settings">
          <Account />
          <h3>Settings</h3>
        </Route>
        <Route path="/Account/Comments">
          <Account />
          <h3>Comments</h3>
        </Route>
        <Route path="/videos/:reelId">
          <SingleReel></SingleReel>
        </Route>
        <Route>
        <PageNot></PageNot>
        </Route>
      </Switch>
    </div>
  );
}
