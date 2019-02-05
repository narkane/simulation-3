import React from "react";
import { Switch, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import Auth from "./Component/Auth/Auth";
import Dashboard from "./Component/Dashboard/Dashboard";
import Post from "./Component/Post/Post";
import Form from "./Component/Form/Form";

export default (
  <>
    <Switch>
      <Route path="/Nav" component={Nav} />
    </Switch>
    <Switch>
      <Route exact path="/" component={Auth} />
      <Route path="/Nav/Dashboard" component={Dashboard} />
      <Route path="/Nav/Post/:postid" component={Post} />
      <Route path="/Nav/New" component={Form} />
    </Switch>
  </>
);
