import { gql } from "@apollo/client";

export const LAUNCHES_Query = gql`
  query {
    launches {
      id
      flight_number
      name
      details
      launch_year
      date_local
      success
      rocket {
        id
      }
    }
  }
`;
export const LAUNCH_Query = gql`
  query launch($Launch_id: ID!) {
    launch(Launch_id: $Launch_id) {
      id
      flight_number
      name
      details
      launch_year
      date_local
      success
      rocket {
        id
        name
        country
        type
        description
      }
    }
  }
`;
export const GET_Rockets = gql`
  query {
    rockets {
      id
      name
      country
      type
      description
    }
  }
`;
export const GET_Rocket = gql`
  query {
    rocket(rocket_id: "5e9d0d95eda69955f709d1eb") {
      id
      name
      country
      type
      description
    }
  }
`;
