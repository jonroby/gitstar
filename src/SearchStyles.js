import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-left: 1px solid #e1e4e8;
  border-right: 1px solid #e1e4e8;
  border-bottom: 1px solid #e1e4e8;
`;

const SearchInputContainer = styled.div`
  display: flex;
`;

const Input = styled.input`
  background-color: white;
  color: #586069;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e1e4e8;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  height: 35px;
  width: 250px;
  padding-left: 10px;
  padding-right: 10px;
  &:focus {
    outline: 0px;
    border: 1px solid #4078c0;
  }
`;

const SearchButton = styled.button`
  background-color: white;
  color: #4078c0;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e1e4e8;
  border-right: 0px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
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

export { SearchContainer, SearchInputContainer, Input, SearchButton };
