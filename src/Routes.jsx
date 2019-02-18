import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Repos from "./Repos";

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/repos" component={Repos} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Routes;
