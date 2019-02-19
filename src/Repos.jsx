import React, { Component } from "react";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import ListItem from "./ListItem";

const accessToken = localStorage.getItem("access_token");

const client = new ApolloClient({
  uri: `https://api.github.com/graphql?access_token=${accessToken}`,
});

const STARRED_REPOS = cursor => {
  const cursorPresent = cursor ? `, after: "${cursor}"` : "";
  return gql`
    query {
      viewer {
        starredRepositories(ownedByViewer: false, first: 10 ${cursorPresent}) {
          pageInfo {
	    endCursor
	    hasNextPage
	    startCursor
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

  render() {
    return (
      <ApolloProvider client={client}>
        <div>
          Repos
          <Query query={STARRED_REPOS()}>
            {({ loading, data }) => {
              return (
                !loading &&
                data.viewer.starredRepositories.nodes.map(metadata => {
                  return <ListItem key={metadata.id} metadata={metadata} />;
                })
              );
            }}
          </Query>
        </div>
      </ApolloProvider>
    );
  }
}

export default Repos;
