import React from "react";
import { useParams } from "react-router";

const Launch = () => {
  let { launch_id } = useParams;
  console.log(launch_id);
  return <div>lanunch {launch_id}</div>;
};

export default Launch;
