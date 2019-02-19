import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import queryString from "query-string";
import ListItem from "./ListItem";

const accessToken = localStorage.getItem("access_token");

const client = new ApolloClient({
  uri: `https://api.github.com/graphql?access_token=${accessToken}`
});

const STARRED_REPOS = cursor => {
  const cursorPresent = cursor ? `, after: "${cursor}"` : "";
  return gql`
    query {
      viewer {
        starredRepositories(ownedByViewer: false, first: 2, ${cursorPresent}) {
          pageInfo {
	    startCursor
	    endCursor
	    hasNextPage
            hasPreviousPage
          }
	  totalCount
	  nodes {
	    id,
	    name       
	    description,
	    url
	    updatedAt
	    licenseInfo {
	      name
	    }
	    owner {
	      id
	      login
	    }
	    primaryLanguage {
	      name
	    }
	    stargazers {
	      totalCount
	    }
            viewerHasStarred
	  }
        }
      }
    }
  `;
};

class Repos extends Component {
  componentDidMount() {
    if (!accessToken) {
      this.props.history.push("/");
    }
  }

  renderRepos(repos) {
    return repos.map(metadata => {
      return <ListItem key={metadata.id} metadata={metadata} />;
    });
  }

  renderPagination(pageInfo) {
    return (
      <div>
        {pageInfo.hasPreviousPage ? (
          <Link to={`/repos?page=${pageInfo.startCursor}`}>Previous</Link>
        ) : (
          <div>No Previous</div>
        )}
        {pageInfo.hasNextPage ? (
          <Link to={`/repos?page=${pageInfo.endCursor}`}>Next</Link>
        ) : (
          <div>No Next</div>
        )}
      </div>
    );
  }

  render() {
    const values = queryString.parse(this.props.location.search);
    const page = values.page || false;

    return (
      <ApolloProvider client={client}>
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
                  <div>
                    {this.renderRepos(starredRepositories.nodes)}
                    {this.renderPagination(starredRepositories.pageInfo)}
                  </div>
                );
              }

              return <div>Loading</div>;
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default Repos;
