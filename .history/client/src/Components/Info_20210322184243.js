import React from "react";

const Info = () => {
  return (
    <div className="m-3 space-y-2">
      <h2 className="text-2xl font-bold"> Lanuches :</h2>
      <div className="flex justify-betwwen">
        <div className="p-3 w-12 rounded bg-green-400"></div>
        <div>success</div>
      </div>

      <div className="p-3 w-12 rounded bg-red-400 "></div>
    </div>
  );
};

export default Info;
