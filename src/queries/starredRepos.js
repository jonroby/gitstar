import { gql } from "apollo-boost";

const STARRED_REPOS = cursor => {
  const cursorPresent = cursor ? `, after: "${cursor}"` : "";
  return gql`
    query {
      viewer {
        starredRepositories(ownedByViewer: false, first: 20, ${cursorPresent}) {
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

export default STARRED_REPOS;
