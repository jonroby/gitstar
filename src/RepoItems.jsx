import React, { Component } from "react";
import { Link } from "react-router-dom";
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

const RepoItems = ({ repos, pageInfo }) => {
  return (
    <React.Fragment>
      {renderRepos(repos)}
      {renderPagination(pageInfo)}
    </React.Fragment>
  );
};

export default RepoItems;
