import React from "react";
import Alert from "./Alert";
import { useData } from "./Context/GlobalContext";
import { GET_LAUNCHES } from "./QueryList";
import Spinner from "./Spinner";
const Lanuches = () => {
  const UseFetchData = useData();
  const {
    loading,
    error,
    data: { launches },
  } = UseFetchData(GET_LAUNCHES);
  if (loading) return <Spinner />;
  if (error) return <Alert />;

  return (
    <>
      {launches.map((result) => (
        <p>{result.id}</p>
      ))}
    </>
  );
};

export default Lanuches;
