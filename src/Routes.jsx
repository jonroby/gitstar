import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import App from "./App";
import OAuth from "./OAuth";
import Repos from "./Repos";
import Search from "./Search";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 60px;
  flex-grow: 1;
  max-width: 800px;
`;

class Routes extends Component {
  render() {
    const accessToken = localStorage.getItem("access_token");
    return (
      <BrowserRouter>
        <AppContainer>
          <Route component={Navbar} />
          <Content>
            {!accessToken ? (
              <Switch>
                <Route path="/" component={App} exact />
                <Route path="/oauth" component={OAuth} />
              </Switch>
            ) : (
              <React.Fragment>
                <Route component={Search} />
                <Switch>
                  <Route path="/" component={Repos} />
                  <Route path="/starred" component={Repos} />
                  <Route path="/search" component={Search} />
                </Switch>
              </React.Fragment>
            )}
          </Content>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default Routes;
