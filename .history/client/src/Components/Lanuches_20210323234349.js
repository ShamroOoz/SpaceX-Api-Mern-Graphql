import React from "react";
import Alert from "./Alert";
import { useData } from "./Context/GlobalContext";
import Spinner from "./Spinner";
import Launch from "./Launch";

//
const Lanuches = () => {
  console.log(useData());
  const { getalllaunchesListner, state } = useData();
  getalllaunchesListner();
  const { loading, error, data } = state;
  if (loading) return <Spinner />;
  if (error) return <Alert />;
  console.log(data);
  return (
    <>
      {data.launches.map((result) => (
        <Launch key={result.id} result={result} />
      ))}
    </>
  );
};

export default Lanuches;
