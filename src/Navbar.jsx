import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Octostar from "./octostar.png";

const NavbarContainer = styled.div`
  z-index: 1;
  height: 60px;
  width: 100%;
  position: fixed;
  background-color: #263238;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  height: 60px;
  flex-grow: 1;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

class Navbar extends Component {
  render() {
    return (
      <NavbarContainer>
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
      </NavbarContainer>
    );
  }
}

export default Navbar;
