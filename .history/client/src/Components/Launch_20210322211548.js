import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launch_id } = useParams();
  return (
    <div>
      <div className="flex ml-2 items-center mt-2">
        <div className="text-2xl font-bold text-gray-700">Mission:</div>
      </div>
      <div className=" flex-1  p-4 flex justify-center items-center">
        <div className="bg-gray-200 w-full md:max-w-4xl rounded-lg shadow">
          <div className="h-12 flex justify-center items-center border-b border-gray-200 m-4">
            <div>
              <div className="text-2xl font-bold text-gray-700">
                Lanuch Details
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Flight Number:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Lanuch Year:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Launch Successful:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rocket Details */}
      <div className=" flex-1  p-4 flex justify-center items-center">
        <div className="bg-gray-200 w-full md:max-w-4xl rounded-lg shadow">
          <div className="h-12 flex justify-center items-center border-b border-gray-200 m-4">
            <div>
              <div className="text-2xl font-bold text-gray-700">
                Rocket Details
              </div>
            </div>
          </div>
          <div className="px-6">
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket ID:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket Name:
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket Type:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 ">
        <button className="p-4 bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white">
          Back
        </button>
      </div>
    </div>
  );
};

export default Launch;
