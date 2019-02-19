import React, { Component } from "react";

const url = "https://github.com/login/oauth/authorize?";

const parameters = {
  client_id: "10b97d81586a1752ae65",
  type: "user_agent",
  redirect_uri: "https://gitstarhub.herokuapp.com/oauth",
  scope: "public_repo",
};

const parameterString = Object.keys(parameters).reduce((prev, curr) => {
  if (prev === "") return `${curr}=${parameters[curr]}`;
  return `${prev}&${curr}=${parameters[curr]}`;
}, "");

class App extends Component {
  render() {
    const link = `${url}${parameterString}`;

    return (
      <div className="App">
        <div>Gitstar</div>
        <a href={link}>Oauth</a>
      </div>
    );
  }
}

export default App;
