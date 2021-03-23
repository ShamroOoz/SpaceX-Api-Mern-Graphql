import React from "react";
import { useParams } from "react-router";

const Launch = () => {
  let param = useParams;
  console.log(param);
  return <div>lanunch </div>;
};

export default Launch;
