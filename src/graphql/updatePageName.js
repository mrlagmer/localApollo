import gql from "graphql-tag";

export const updatePageName = gql`
  mutation updatePageName($name: String!) {
    updatePageName(name: $name) @client {
      currentPageName
    }
  }
`;
