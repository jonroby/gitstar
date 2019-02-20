import React from "react";
import { Query } from "react-apollo";
import queryString from "query-string";
import styled from "styled-components";
import RepoItems from "./RepoItems";
import searchRepos from "./queries/searchRepos";
import starredRepos from "./queries/starredRepos";

const H1 = styled.h1`
  color: #263238;
  font-size: 28px;
`;

const render = (handler, searchTerm) => ({ loading, data, fetchMore }) => {
  if (loading) return <div>Loading</div>;
  const { repos, pageInfo } = handler.transformer(data);
  const args = { searchTerm, cursor: pageInfo.endCursor };
  return (
    <RepoItems
      onLoadMore={() => fetchMore(handler.fetchMoreObject(args))}
      repos={repos}
      hasNextPage={pageInfo.hasNextPage}
    />
  );
};

const Repos = props => {
  const values = queryString.parse(props.location.search);
  const searchTerm = values.searchTerm || "";
  const { pathname } = props.location;

  const map = {
    "/search": searchRepos,
    "/starred": starredRepos
  };

  const mapTitle = {
    "/search": "Search Results",
    "/starred": "Your Starred Repos"
  };

  const handler = map[pathname] || map["/starred"];
  const title = mapTitle[pathname] || mapTitle["/starred"];
  return (
    <div>
      <H1>{title}</H1>
      <Query query={handler.query(searchTerm)}>
        {render(handler, searchTerm)}
      </Query>
    </div>
  );
};

export default Repos;
