import gql from "graphql-tag";

export const updatePageNameMutation = gql`
  mutation updatePageName($name: String!) {
    updatePageName(name: $name) @client {
      currentPageName
    }
  }
`;
