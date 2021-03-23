import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launch_id } = useParams();
  return (
    <div>
      <div class=" flex-1  p-4 flex justify-center items-center">
        <div class="bg-white w-full md:max-w-4xl rounded-lg shadow">
          <div class="h-12 flex justify-center items-center border-b border-gray-200 m-4">
            <div>
              <div class="text-2xl font-bold text-gray-700">Lanuch Details</div>
            </div>
          </div>
          <div class="px-6">
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Flight Number:
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Lanuch Year:
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Launch Successful:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Rocket Details */}
      <div class=" flex-1  p-4 flex justify-center items-center">
        <div class="bg-gray-200 w-full md:max-w-4xl rounded-lg shadow">
          <div class="h-12 flex justify-center items-center border-b border-gray-200 m-4">
            <div>
              <div class="text-2xl font-bold text-gray-700">Lanuch Details</div>
            </div>
          </div>
          <div class="px-6">
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Flight Number:
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Lanuch Year:
                  </div>
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div class="flex items-center">
                <div class="ml-2">
                  <div class="text-xl font-semibold text-gray-600">
                    Launch Successful:
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
