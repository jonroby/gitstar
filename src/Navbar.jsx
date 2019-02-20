import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import styled from "styled-components/macro";
import Octostar from "./octostar.png";

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const NavbarRow = styled.div`
  height: 60px;
  background-color: #263238;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  flex-grow: 1;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  background-color: hsla(0, 0%, 100%, 0.125);
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 500;

  border-radius: 3px;
  height: 35px;
  padding-left: 10px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
    color: #3c4146;
    background-color: #fafafa;
  }
  &:focus {
    outline: 0px;
  }
`;

class Navbar extends Component {
  onClick = () => {
    localStorage.removeItem("access_token");
    this.props.history.push("/");
  };

  render() {
    const accessToken = localStorage.getItem("access_token");
    return (
      <NavbarContainer>
        <NavbarRow>
          <Inner>
            <div style={{ visibility: "hidden" }}>
              <button>Logout</button>
            </div>

            <Link to="/starred">
              <img style={{ width: "45px" }} src={Octostar} />
            </Link>

            {accessToken ? (
              <Button onClick={this.onClick}>Logout</Button>
            ) : (
              <div style={{ visibility: "hidden" }}>
                <button>Logout</button>
              </div>
            )}
          </Inner>
        </NavbarRow>
        {accessToken ? <Search /> : null}
      </NavbarContainer>
    );
  }
}

export default Navbar;
