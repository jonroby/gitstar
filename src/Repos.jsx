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

const render = transformer => ({ loading, data }) => {
  if (loading) return <div>Loading</div>;
  const { repos, pageInfo } = transformer(data);
  return <RepoItems repos={repos} pageInfo={pageInfo} />;
};

const Repos = props => {
  const values = queryString.parse(props.location.search);
  const query = values.query || "";
  const page = values.page || false;

  const { pathname } = props.location;
  const map = {
    "/search": searchRepos,
    "/starred": starredRepos,
  };

  const mapTitle = {
    "/search": "Search Results",
    "/starred": "Your Starred Repos",
  };

  const handler = map[pathname];
  return (
    <div>
      <H1>{mapTitle[pathname]}</H1>
      <Query query={handler.query(query)}>{render(handler.transformer)}</Query>
    </div>
  );
};

export default Repos;
