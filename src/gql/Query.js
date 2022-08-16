import { gql } from "@apollo/client";
export const missions = gql`
  query Launches {
    launches {
      mission_name

      rocket {
        rocket_name
      }
    }
  }
`;
