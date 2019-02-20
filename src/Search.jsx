import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  SearchContainer,
  SearchInputContainer,
  Input,
  SearchButton
} from "./SearchStyles.js";

class Search extends Component {
  state = { input: "" };

  updateInput = event => {
    event.preventDefault();
    this.setState({ input: event.target.value });
  };

  componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    if (!accessToken) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <SearchContainer>
          <SearchInputContainer>
            <Link to={`/search?searchTerm=${this.state.input}`}>
              <SearchButton>Search Repos</SearchButton>
            </Link>
            <Input
              onChange={this.updateInput}
              value={this.state.input}
              placeholder={"Search for Repositories to Star"}
            />
          </SearchInputContainer>
        </SearchContainer>
      </div>
    );
  }
}

export default Search;
