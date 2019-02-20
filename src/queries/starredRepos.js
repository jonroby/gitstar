import { gql } from "apollo-boost";

const fetchMoreObject = ({ cursor }) => ({
  query: query(cursor),
  updateQuery: (previousResult, { fetchMoreResult }) => {
    const previous = transformer(previousResult);
    const moreResults = transformer(fetchMoreResult);
    return {
      cursor: moreResults.pageInfo.endCursor,
      viewer: {
        starredRepositories: {
          nodes: [...previous.repos, ...moreResults.repos],
          pageInfo: moreResults.pageInfo,
          __typename: fetchMoreResult.viewer.starredRepositories.__typename
        },
        __typename: fetchMoreResult.viewer.__typename
      }
    };
  }
});

const query = cursor => {
  const cursorParameter = cursor ? `, after: "${cursor}"` : "";
  return gql`
query {
      viewer   {
        starredRepositories(ownedByViewer: false, first: 2, ${cursorParameter}) {
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
    }`;
};

const transformer = data => {
  const starredRepositories =
    data &&
    data.viewer &&
    data.viewer.starredRepositories &&
    data.viewer.starredRepositories;

  console.log("starredRepositories ", starredRepositories);
  return {
    repos: starredRepositories.nodes,
    pageInfo: starredRepositories.pageInfo
  };
};

export default { query, transformer, fetchMoreObject };
