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

const UseFetchData = () => {
  const { loading, error, data } = useQuery(GET_LAUNCHES);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return <div>GET ALL lANUCHEX</div>;
};

export default UseFetchData;
