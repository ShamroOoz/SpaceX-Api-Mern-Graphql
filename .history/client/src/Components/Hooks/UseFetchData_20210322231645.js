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
  return {
    loading,
    error,
    data,
  };
};

export default UseFetchData;
