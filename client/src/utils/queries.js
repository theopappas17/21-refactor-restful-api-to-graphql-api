import { gql } from '@apollo/client';

export const GET_ME= gql`
  query allUsers {
    profiles {
     me
    }
  }
`;
