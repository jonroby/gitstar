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
  border-top: 1px solid #e1e4e8;
  border-radius: 3px;
`;

const Button = styled.button`
  background-color: white;
  color: #4078c0;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e1e4e8;
  border-radius: 3px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
    background-color: #fafafa;
  }
  &:focus {
    outline: 0px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

const RepoItems = ({ repos, hasNextPage, onLoadMore }) => {
  return (
    <React.Fragment>
      <RepoItemsContainer>{renderRepos(repos)}</RepoItemsContainer>

      <BottomContainer>
        {hasNextPage ? <Button onClick={onLoadMore}>Load More</Button> : null}
      </BottomContainer>
    </React.Fragment>
  );
};

export default RepoItems;
