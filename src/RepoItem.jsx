import React, { Component } from "react";
import { Mutation } from "react-apollo";
import simpleIcons from "simple-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import formatDate from "./helpers/formatDate";
import TOGGLE_STAR from "./mutations/starRepo";
import {
  IconSt,
  RepoItemContainer,
  Row,
  Text,
  StyledLink
} from "./RepoItemStyles";

import "./RepoItem.css";

const Icon = lang => {
  const inner = simpleIcons[lang] && simpleIcons[lang].svg;
  return inner && <IconSt dangerouslySetInnerHTML={{ __html: inner }} />;
};

class RepoItem extends Component {
  render() {
    const { metadata } = this.props;

    const lang = metadata.primaryLanguage && metadata.primaryLanguage.name;
    const renderLang = (lang && Icon(lang)) || <Text>{lang}</Text>;
    return (
      <RepoItemContainer>
        <Row>
          <div>
            <div style={{ paddingBottom: "15px" }}>
              <div style={{ paddingBottom: "3px" }}>
                <StyledLink href={metadata.url}>
                  {metadata.owner && metadata.owner.login}/{metadata.name}
                </StyledLink>
              </div>
              <Text>{metadata.description}</Text>
            </div>
          </div>

          <div>
            <Row>
              <Mutation
                mutation={TOGGLE_STAR(metadata.viewerHasStarred, metadata.id)}
              >
                {(toggleStar, { data }) => {
                  return (
                    <button onClick={toggleStar}>
                      <FontAwesomeIcon
                        icon={faStar}
                        color={
                          metadata.viewerHasStarred ? "#4078c0" : "#a9a9a9"
                        }
                      />
                    </button>
                  );
                }}
              </Mutation>
              <Text>
                {metadata.stargazers && metadata.stargazers.totalCount}
              </Text>
            </Row>
          </div>
        </Row>
        <Row>
          <div>
            <Text>
              Updated on {metadata.updatedAt && formatDate(metadata.updatedAt)}
            </Text>
          </div>

          <Row>
            <div>{renderLang}</div>
          </Row>
        </Row>
      </RepoItemContainer>
    );
  }
}

export default RepoItem;
