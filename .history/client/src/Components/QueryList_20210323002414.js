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
export const GET_LAUNCH = (id) => {
  console.log(id);
  return gql`
    query {
      launch(Launch_id: id) {
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
};

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
export const GET_Rocket = (id) => {
  return gql`
    query {
      rocket(rocket_id: id) {
        id
        name
        country
        type
        description
      }
    }
  `;
};
