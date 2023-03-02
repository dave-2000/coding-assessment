import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($user: userInput!) {
    createUser(user: $user) {
      name
    }
  }
`;