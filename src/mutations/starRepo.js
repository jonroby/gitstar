import { gql } from "apollo-boost";

const TOGGLE_STAR = (viewerHasStarred, starrableId) => gql`
  mutation {
    ${viewerHasStarred ? "removeStar" : "addStar"} (
      input: {
        starrableId: "${starrableId}"
        clientMutationId: "idk"
      }
    ) {
      starrable {
        id
        viewerHasStarred
      }
    }
  }
`;

export default TOGGLE_STAR;
