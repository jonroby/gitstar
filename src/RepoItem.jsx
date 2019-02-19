import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TOGGLE_STAR from "./mutations/starRepo";

class RepoItem extends Component {
  render() {
    const { metadata } = this.props;
    return (
      <div
        style={{ borderTop: "1px solid gray", borderBottom: "1px solid gray" }}
      >
        <div>{metadata.name}</div>
        <div>{metadata.owner && metadata.owner.login}</div>
        <div>{metadata.licenseInfo && metadata.licenseInfo.name}</div>
        <div>{metadata.primaryLanguage && metadata.primaryLanguage.name}</div>
        <div>{metadata.updatedAt}</div>
        <div>{metadata.url}</div>
        <Mutation
          mutation={TOGGLE_STAR(metadata.viewerHasStarred, metadata.id)}
        >
          {(toggleStar, { data }) => {
            /* console.log("metadata ", metadata); */
            /* console.log("insideToggle ", data); */
            return (
              <button onClick={toggleStar}>
                <FontAwesomeIcon
                  icon={faStar}
                  color={metadata.viewerHasStarred ? "#4078c0" : "#a9a9a9"}
                />
              </button>
            );
          }}
        </Mutation>
        <div>{metadata.stargazers && metadata.stargazers.totalCount}</div>
      </div>
    );
  }
}

export default RepoItem;
