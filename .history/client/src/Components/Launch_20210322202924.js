import React from "react";
import { useParams } from "react-router-dom";

const Launch = () => {
  let { launch_id } = useParams();
  return (
    <div class="min-h-screen flex-1  p-4 flex justify-center items-center">
      <div class="bg-white w-full md:max-w-4xl rounded-lg shadow">
        <div class="h-12 flex justify-center items-center border-b border-gray-200 m-4">
          <div>
            <div class="text-xl font-bold text-gray-700">Josef256 Lobby</div>
            <div class="text-sm font-base text-gray-500">
              Waiting for more players...
            </div>
          </div>
        </div>
        <div class="px-6">
          <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <img
                class="rounded-full h-12 w-12"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png"
                alt="Logo"
              />
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">Lirik</div>
                <div class="text-sm font-light text-gray-500">
                  Level 6 - Warlock
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <img
                class="rounded-full h-12 w-12"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/cb661e9a-68e5-4e37-89ce-231960ff7f8e-profile_image-70x70.png"
                alt="Logo"
              />
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">MembTV</div>
                <div class="text-sm font-light text-gray-500">
                  Level 4 - Monk
                </div>
              </div>
            </div>
            <div>
              <button class="bg-red-400 hover:bg-red-500  p-2 rounded-full shadow-md flex justify-center items-center">
                <svg
                  class="text-white toggle__lock w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
            <div class="flex items-center">
              <img
                class="rounded-full h-12 w-12"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/e82b2c90-efe6-41c7-bd50-7caba86fd3b5-profile_image-70x70.png"
                alt="Logo"
              />
              <div class="ml-2">
                <div class="text-sm font-semibold text-gray-600">
                  DansGaming
                </div>
                <div class="text-sm font-light text-gray-500">
                  Level 12 - Paladan
                </div>
              </div>
            </div>
            <div>
              <button class="bg-red-400 hover:bg-red-500  p-2 rounded-full shadow-md flex justify-center items-center">
                <svg
                  class="text-white toggle__lock w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Launch;
