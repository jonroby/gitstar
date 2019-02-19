import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";

const LOADING = "LOADING";
const ERROR = "ERROR";
const READY = "READY";

class OAuth extends Component {
  state = {
    status: LOADING
  };

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.code) {
      this.fetchAuth(values.code);
    } else {
      this.setState({ status: ERROR });
    }
  }

  fetchAuth = async code => {
    const { data: response } = await axios.post(
      "https://peaceful-meadow-82053.herokuapp.com",
      {
        code
      }
    );

    if (response.data) {
      // Potential error handling
      // Check localStorage token
      // If code !== localStorage, then update localStorage with code
      // If code === localStorage, just use localStorage token
      localStorage.setItem("access_token", response.data);

      this.setState({ status: READY });
    } else {
      this.setState({ status: ERROR });
    }
  };

  render() {
    return (
      <div>
        <div>OAuth</div>
        {this.state.status === "LOADING" ? <div>Loading...</div> : null}
        {this.state.status === "ERROR" ? (
          <div>An error occurred. Please try again.</div>
        ) : null}
        {this.state.status === "READY" ? (
          <div>Please click here to go to site</div>
        ) : null}
      </div>
    );
  }
}

export default OAuth;
