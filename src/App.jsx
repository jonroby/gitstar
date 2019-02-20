import React, { Component } from "react";
import styled from "styled-components";

import "./App.css";

const url = "https://github.com/login/oauth/authorize?";

const parameters = {
  client_id: "10b97d81586a1752ae65",
  type: "user_agent",
  redirect_uri: "https://gitstarhub.herokuapp.com/oauth",
  scope: "public_repo"
};

const parameterString = Object.keys(parameters).reduce((prev, curr) => {
  if (prev === "") return `${curr}=${parameters[curr]}`;
  return `${prev}&${curr}=${parameters[curr]}`;
}, "");

const Text = styled.div`
  color: #586069;
  font-size: 14px;
`;

const SearchButton = styled.button`
  background-color: white;
  color: #4078c0;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
  &:focus {
    outline: 0px;
  }
`;

export { SearchButton };

class App extends Component {
  render() {
    const link = `${url}${parameterString}`;

    return (
      <div className="App">
        <Text>
          Welcome to Gitstar, the place to search and star Github repos.
        </Text>

        <a href={link}>
          <SearchButton>Get started</SearchButton>
        </a>
      </div>
    );
  }
}

export default App;
