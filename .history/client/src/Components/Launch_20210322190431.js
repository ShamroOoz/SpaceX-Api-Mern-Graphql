import React from "react";
import { useParams } from "react-router";

const Launch = () => {
  let { id } = useParams;
  console.log(id);
  return <div>lanunch </div>;
};

export default Launch;
