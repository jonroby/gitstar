import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import queryString from "query-string";
import RepoItems from "./RepoItems";
import SEARCH_REPOS from "./queries/searchRepos";

const accessToken = localStorage.getItem("access_token");

const client = new ApolloClient({
  uri: `https://api.github.com/graphql?access_token=${accessToken}`
});

class Search extends Component {
  state = { input: "" };

  updateInput = event => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  componentDidMount() {
    if (!accessToken) {
      this.props.history.push("/");
    }
  }

  render() {
    const values = queryString.parse(this.props.location.search);
    const page = values.page || false;
    const query = values.query || false;

    return (
      <ApolloProvider client={client}>
        <div>
          Search
          <input
            onChange={this.updateInput}
            value={this.state.input}
            placeholder={"Search for Repositories to Star"}
          />
          <Link to={`/search?query=${this.state.input}`}>Search</Link>
          {query && (
            <Query query={SEARCH_REPOS(query)}>
              {({ loading, data }) => {
                const { search } = data;

                if (!loading) {
                  return (
                    <RepoItems
                      repos={search.nodes}
                      pageInfo={search.pageInfo}
                    />
                  );
                }

                return <div>Loading</div>;
              }}
            </Query>
          )}
        </div>
      </ApolloProvider>
    );
  }
}

export default Search;
