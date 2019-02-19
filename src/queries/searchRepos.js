import { gql } from "apollo-boost";

const transformer = data => {
  return { repos: data.search.nodes, pageInfo: data.search.pageInfo };
};

const query = q => gql`
  query {
    search(query: "${q}", first: 20, type: REPOSITORY) {
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

export default { query, transformer };
