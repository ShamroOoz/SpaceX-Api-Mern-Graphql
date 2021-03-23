import React from "react";
import Alert from "./Alert";
import { useData } from "./Context/GlobalContext";
import { LAUNCHES_Query } from "./QueryList";
import Spinner from "./Spinner";
import Launch from "./Launch";

//
const Lanuches = () => {
  const getalllaunchesListner = useData();
  const { loading, error, data } = getalllaunchesListner();
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
