import { useQuery } from "@apollo/client";

const UseFetchData = (Query) => {
  const { loading, error, data } = useQuery(Query);
  console.log(data);
  return {
    loading,
    error,
    data,
  };
};

export default UseFetchData;
