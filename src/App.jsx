import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const TEST_QUERY = gql`
  query {
    repository(owner: "jonroby", name: "gitstar") {
      name
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        Gitstar
        <Query query={TEST_QUERY}>
          {({ loading, data }) => {
            return !loading && <div>Hello Apollo</div>;
          }}
        </Query>
      </div>
    );
  }
}

export default App;
