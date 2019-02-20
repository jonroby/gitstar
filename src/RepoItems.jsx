import React from "react";
import styled from "styled-components/macro";
import RepoItem from "./RepoItem";

const renderRepos = repos => {
  return repos.map(metadata => {
    return <RepoItem key={metadata.id} metadata={metadata} />;
  });
};

const RepoItemsContainer = styled.div`
  border-left: 1px solid #e1e4e8;
  border-right: 1px solid #e1e4e8;
`;

const RepoItems = ({ repos, hasNextPage, onLoadMore }) => {
  return (
    <RepoItemsContainer>
      {renderRepos(repos)}
      {hasNextPage ? <button onClick={onLoadMore}>Load More</button> : null}
    </RepoItemsContainer>
  );
};

export default RepoItems;
