import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import RepoItem from "./RepoItem";

const renderRepos = repos => {
  return repos.map(metadata => {
    return <RepoItem key={metadata.id} metadata={metadata} />;
  });
};

const renderPagination = pageInfo => {
  return (
    <div>
      {pageInfo.hasPreviousPage ? (
        <Link to={`/starred?page=${pageInfo.startCursor}`}>Previous</Link>
      ) : (
        <div>No Previous</div>
      )}
      {pageInfo.hasNextPage ? (
        <Link to={`/starred?page=${pageInfo.endCursor}`}>Next</Link>
      ) : (
        <div>No Next</div>
      )}
    </div>
  );
};

const RepoItemsContainer = styled.div`
  max-width: 800px;
  border-left: 1px solid #e1e4e8;
  border-right: 1px solid #e1e4e8;
`;

const RepoItems = ({ repos, pageInfo }) => {
  return (
    <RepoItemsContainer>
      {renderRepos(repos)}
      {renderPagination(pageInfo)}
    </RepoItemsContainer>
  );
};

export default RepoItems;
