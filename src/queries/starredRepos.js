import { gql } from "apollo-boost";

const query = cursor => {
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

const transformer = data => {
  const starredRepositories =
    data &&
    data.viewer &&
    data.viewer.starredRepositories &&
    data.viewer.starredRepositories;
  return {
    repos: starredRepositories.nodes,
    pageInfo: starredRepositories.pageInfo,
  };
};

export default { query, transformer };
