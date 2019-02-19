import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import queryString from "query-string";
import RepoItems from "./RepoItems";
import SEARCH_REPOS from "./queries/searchRepos";

class Search extends Component {
  state = { input: "" };

  updateInput = event => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  render() {
    const values = queryString.parse(this.props.location.search);
    const page = values.page || false;
    const query = values.query || false;

    return (
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
                  <RepoItems repos={search.nodes} pageInfo={search.pageInfo} />
                );
              }

              return <div>Loading</div>;
            }}
          </Query>
        )}
      </div>
    );
  }
}

export default Search;
