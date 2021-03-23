import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
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
export const GET_LAUNCH = gql`
  query launch($launch_id: String!) {
    launch(Launch_id: $launch_id) {
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
