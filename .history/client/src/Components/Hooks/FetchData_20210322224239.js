import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_LAUNCHES = gql`
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

const FetchData = () => {
  return <div></div>;
};

export default FetchData;
