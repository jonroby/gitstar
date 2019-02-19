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

class Navbar extends Component {
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

            <div>
              <button>Logout</button>
            </div>
          </Inner>
        </NavbarRow>
        {accessToken ? <Search /> : null}
      </NavbarContainer>
    );
  }
}

export default Navbar;
