import React from "react";
import { Link } from "react-router-dom";

const Lanuches = () => {
  return (
    <div className="lg:flex shadow rounded-lg border  border-gray-400 m-3">
      <div className="bg-green-600 rounded-lg lg:w-2/12 py-4 block h-full shadow-inner">
        <div className="text-center tracking-wide">
          <div className="text-white font-bold ">24</div>
        </div>
      </div>
      <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
        <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
          International Conference Dubai
        </div>
        <div className="flex flex-row lg:justify-start justify-center">
          <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
            <i className="far fa-clock"></i> 1:30 PM
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0">
        <Link
          to="launch/1234"
          className="tracking-wider text-gray-600 bg-gray-200 px-5 text-sm rounded leading-loose mx-2 font-semibold"
        >
          Going
        </Link>
      </div>
    </div>
  );
};

export default Lanuches;
