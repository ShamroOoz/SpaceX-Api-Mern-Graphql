import React from "react";

const Info = () => {
  return (
    <div className="m-3 space-y-2">
      <h2 className="text-2xl font-bold"> Lanuches :</h2>
      <div className="flex">
        <div className="p-3 w-12 rounded bg-green-600"></div>
        <div className=" ml-2 text-md font-semibold">success</div>
      </div>
      <div className="flex">
        <div className="p-3 w-12 rounded bg-red-600 "></div>
        <div className=" ml-2 text-md font-semibold">Fail</div>
      </div>
    </div>
  );
};

export default Info;
