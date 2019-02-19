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

class Repos extends Component {
  render() {
    return (
      <div>
        Repos
        {/* <Query query={TEST_QUERY}> */}
        {/*   {({ loading, data }) => { */}
        {/*     return !loading && <div>Hello Apollo</div>; */}
        {/*   }} */}
        {/* </Query> */}
      </div>
    );
  }
}

export default Repos;
