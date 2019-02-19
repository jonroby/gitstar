import React, { Component } from "react";
import { Query } from "react-apollo";
import queryString from "query-string";
import RepoItems from "./RepoItems";
import STARRED_REPOS from "./queries/starredRepos";

class Repos extends Component {
  // componentDidMount() {
  //   if (!accessToken) {
  //     this.props.history.push("/");
  //   }
  // }

  render() {
    const values = queryString.parse(this.props.location.search);
    const page = values.page || false;

    return (
      <div>
        Repos
        <Query query={STARRED_REPOS(page)}>
          {({ loading, data }) => {
            const starredRepositories =
              data &&
              data.viewer &&
              data.viewer.starredRepositories &&
              data.viewer.starredRepositories;

            if (!loading) {
              return (
                <RepoItems
                  repos={starredRepositories.nodes}
                  pageInfo={starredRepositories.pageInfo}
                />
              );
            }

            return <div>Loading</div>;
          }}
        </Query>
      </div>
    );
  }
}

export default Repos;
