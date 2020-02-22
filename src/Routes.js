import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "./components/pages/home/Home";
import UserRegister from "./components/pages/user/UserRegister";

export default props => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user/register" component={UserRegister} />
    <Redirect from="*" to="/" />
  </Switch>
);
