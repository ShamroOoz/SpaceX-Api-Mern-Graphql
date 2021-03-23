import React from "react";
import Alert from "./Alert";
import { LAUNCHES_Query } from "./QueryList";
import Spinner from "./Spinner";
import Launch from "./Launch";
import { useQuery } from "@apollo/client";

//
const Lanuches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_Query);
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
