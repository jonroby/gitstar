import { gql } from "apollo-boost";

const SEARCH_REPOS = query => gql`
  query {
    search(query: "${query}", first: 20, type: REPOSITORY) {
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

export default SEARCH_REPOS;
