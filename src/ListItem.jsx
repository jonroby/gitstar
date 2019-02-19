import React, { Component } from "react";

class ListItem extends Component {
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
        <div>{metadata.stargazers && metadata.stargazers.totalCount}</div>
        <div>{metadata.updatedAt}</div>
        <div>{metadata.url}</div>
        <div>{metadata.viewerHasStarred}</div>
      </div>
    );
  }
}

export default ListItem;
