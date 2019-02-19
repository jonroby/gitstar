import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import OAuth from "./OAuth";
import Repos from "./Repos";
import Search from "./Search";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/oauth" component={OAuth} />
            <Route path="/starred" component={Repos} />
            <Route path="/search" component={Search} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Routes;
