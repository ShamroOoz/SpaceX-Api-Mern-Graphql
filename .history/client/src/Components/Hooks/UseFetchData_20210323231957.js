import { useQuery } from "@apollo/client";

const UseFetchData = (Query) => {
  return useQuery(Query);
};

export default UseFetchData;
