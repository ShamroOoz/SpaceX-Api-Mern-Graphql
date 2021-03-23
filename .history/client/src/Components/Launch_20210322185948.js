import React from "react";
import { useParams } from "react-router";

const Launch = () => {
  let { slug } = useParams;
  return <div>lanunch {slug}</div>;
};

export default Launch;
