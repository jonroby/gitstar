import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import styled from "styled-components/macro";
import Navbar from "./Navbar";
import App from "./App";
import OAuth from "./OAuth";
import Repos from "./Repos";

const AppContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 120px;
  flex-grow: 1;
  max-width: 800px;
`;

class Routes extends Component {
  render() {
    const accessToken = localStorage.getItem("access_token");
    const client = accessToken
      ? new ApolloClient({
          uri: `https://api.github.com/graphql?access_token=${accessToken}`
        })
      : null;
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
              <ApolloProvider client={client}>
                <Switch>
                  <Route path="/search" component={Repos} />
                  <Route path="/starred" component={Repos} />
                </Switch>
              </ApolloProvider>
            )}
          </Content>
        </AppContainer>
      </BrowserRouter>
    );
  }
}

export default Routes;
