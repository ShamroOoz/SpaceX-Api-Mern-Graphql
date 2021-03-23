import React from "react";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import { useData } from "./Context/GlobalContext";
import { GET_LAUNCHES } from "./QueryList";
import Spinner from "./Spinner";
const Lanuches = () => {
  const UseFetchData = useData();
  const { loading, error, data } = UseFetchData(GET_LAUNCHES);
  if (loading) return <Spinner />;
  if (error) return <Alert />;
  console.log(data);

  return (
    <>
      {data.launches.map((result) => (
        <p>{result.id}</p>
      ))}
    </>
  );
};

export default Lanuches;
