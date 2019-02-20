import React from "react";
import styled from "styled-components/macro";

const IconSt = styled.div`
  width: 25px;
  fill: #a9a9a9;
`;

const RepoItemContainer = styled.div`
  padding: 20px;
  border-top: 1px solid #eee;
  background-color: white;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.div`
  color: #586069;
  font-size: 14px;
`;

const Link = ({ className, children, href }) => (
  <a href={href} className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  font-size: 16px;
  color: #4078c0;
  font-weight: bold;
  text-decoration: none;
  padding-bottom: 20px;
`;

export { IconSt, RepoItemContainer, Row, Text, StyledLink };
