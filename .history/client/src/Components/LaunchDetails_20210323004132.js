import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "./Context/GlobalContext";
import { gql } from "@apollo/client";
import { GET_LAUNCH } from "./QueryList";
import Spinner from "./Spinner";
import Alert from "./Alert";

//
const LaunchDetails = () => {
  let param = useParams();
  console.log(param.launch_id);
  let UseFetchData = useData();
  const query = gql`
    query {
      launch(Launch_id: "5eb87cd9ffd86e000604b32a") {
        id
        flight_number
        name
        details
        launch_year
        date_local
        success
        rocket {
          id
        }
      }
    }
  `;
  const { loading, error, data } = UseFetchData(query);
  if (loading) return <Spinner />;
  if (error) return <Alert />;
  console.log(data);
  return (
    <div>
      <div className="flex ml-6 items-center mt-2">
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
                <div className="ml-2 grid grid-cols-2 gap-8 ">
                  <div className="text-xl font-semibold text-gray-600">
                    Flight Number:
                  </div>
                  <div className="text-xl text-gray-600">Parse Data:</div>
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
        <Link
          to="/"
          className="p-4  block text-center bg-green-400 hover:bg-green-500 w-full rounded-lg shadow text-xl font-medium uppercase text-white"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default LaunchDetails;
