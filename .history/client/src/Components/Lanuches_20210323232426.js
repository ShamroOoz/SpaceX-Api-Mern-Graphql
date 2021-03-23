import React from "react";
import Alert from "./Alert";
import { useData } from "./Context/GlobalContext";
import { LAUNCHES_Query } from "./QueryList";
import Spinner from "./Spinner";
import Launch from "./Launch";

//
const Lanuches = () => {
  const UseFetchData = useData();
  const { loading, error, data } = UseFetchData(LAUNCHES_Query);
  if (loading) return <Spinner />;
  if (error) return <Alert />;

  return (
    <>
      {data.launches.map((result) => (
        <Launch key={result.id} result={result} />
      ))}
    </>
  );
};

export default Lanuches;
