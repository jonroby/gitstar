import React, { Component } from "react";
import axios from "axios";
import queryString from "query-string";

class OAuth extends Component {
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    if (values.code) {
      this.fetchAuth(values.code);
    } else {
    }

    // Check localStorage token
    // If code !== localStorage, then update localStorage with code
    // If code === localStorage, just use localStorage token
    //
  }

  fetchAuth = async code => {
    const response = await axios.post(
      "https://peaceful-meadow-82053.herokuapp.com",
      {
        code
      }
    );

    if (response.data) {
      console.log("response ", response);
    } else {
      if (response.error) {
        // Render error message
        // Click back to root to try again
      } else {
        // Render 'no error' message
        // Click back to root to try again
      }
    }
  };

  render() {
    return (
      <div>
        <div>OAuth</div>
      </div>
    );
  }
}

export default OAuth;
