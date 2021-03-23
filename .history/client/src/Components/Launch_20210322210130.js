import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launch_id } = useParams();
  return (
    <div class=" flex-1  p-4 flex justify-center items-center">
      <div class="bg-white w-full md:max-w-4xl rounded-lg shadow">
        <div class="h-12 flex justify-center items-center border-b border-gray-200 m-4">
          <div>
            <div class="text-xl font-bold text-gray-700">Lanuch Details</div>
            <div class="text-sm font-base text-gray-500">
              Waiting for more players...
            </div>
          </div>
        </div>
        <div class="px-6">
          <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">Lirik</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
