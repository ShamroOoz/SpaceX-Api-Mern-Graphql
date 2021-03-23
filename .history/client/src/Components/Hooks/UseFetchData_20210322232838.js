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
  //const { loading, error, data } = useQuery(GET_LAUNCHES);
  const getalllanuches = async () => {
    const lanuches = useQuery(GET_LAUNCHES);
    return lanuches;
  };
  return {
    getalllanuches,
  };
};

export default UseFetchData;
