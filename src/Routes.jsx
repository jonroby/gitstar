import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";
import App from "./App";
import OAuth from "./OAuth";
import Repos from "./Repos";
import Search from "./Search";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppContainer>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/oauth" component={OAuth} />
            <Route path="/starred" component={Repos} />
            <Route path="/search" component={Search} />
          </Switch>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default Routes;
