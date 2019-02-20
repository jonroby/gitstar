import { gql } from "apollo-boost";

const transformer = data => {
  return { repos: data.search.nodes, pageInfo: data.search.pageInfo };
};

const fetchMoreObject = (searchTerm, cursor) => ({
  query: query(searchTerm, cursor),
  updateQuery: (previousResult, { fetchMoreResult }) => {
    const repos = previousResult.search.nodes;
    const moreResults = transformer(fetchMoreResult);
    return {
      cursor: moreResults.pageInfo.endCursor,
      search: {
        nodes: [...repos, ...moreResults.repos],
        pageInfo: moreResults.pageInfo,
        __typename: fetchMoreResult.search.__typename
      }
    };
  }
});

const query = (searchTerm, cursor) => {
  const cursorParameter = cursor ? `, after: "${cursor}"` : "";
  return gql`
  query {
    search(query: "${searchTerm}", first: 3, type: REPOSITORY ${cursorParameter}) {
      pageInfo {
        endCursor
        hasNextPage
        startCursor
      }
      nodes {
        ... on Repository {
          id
          name
          description
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

export default { query, transformer, fetchMoreObject };
