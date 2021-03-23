import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launch_id } = useParams();
  return <div>lanunch {launch_id} </div>;
};

export default Launch;
