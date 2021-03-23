import React from "react";
import { useParams } from "react-router";

const Launch = () => {
  const params = useParams;
  return <div>lanunch {params}</div>;
};

export default Launch;
