import React from "react";
import { useParams, Link } from "react-router-dom";
import { useData } from "./Context/GlobalContext";
import { GET_LAUNCH } from "./QueryList";
import Spinner from "./Spinner";
import Alert from "./Alert";
import { useQuery } from "@apollo/client";

//
const LaunchDetails = () => {
  let { Launch_id } = useParams();
  const { loading, error, data } = useQuery(GET_LAUNCH, {
    variables: { Launch_id },
  });
  if (loading) return <Spinner />;
  if (error) return <Alert />;
  console.log(data);

  return (
    <div>
      <div className="flex ml-6 items-center mt-2">
        <div className="text-2xl font-bold text-gay-700">
          Mission: <span className="text-green-600">{data.launch.name}</span>
        </div>
      </div>
      <div className=" flex-1  p-4 flex justify-center items-center">
        <div className="bg-gray-200 w-full md:max-w-4xl rounded-lg shadow">
          <div className="h-12 flex justify-center items-center border-b border-gray-200 m-4">
            <div>
              <div className="text-2xl font-bold text-gray-700">
                Lanuch Details
              </div>
              <div className="text-center text-gray-400">
                {data.launch.date_local}
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
                  <div className="text-xl text-gray-600">
                    {data.launch.flight_number}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2 grid grid-cols-2 gap-8 ">
                  <div className="text-xl font-semibold text-gray-600">
                    Lanuch Year:
                  </div>
                  <div className="text-xl text-gray-600">
                    {data.launch.launch_year
                      ? data.launch.launch_year
                      : "Not Given"}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2 grid grid-cols-2 gap-8 ">
                  <div className="text-xl font-semibold text-gray-600">
                    Launch Successful:
                  </div>
                  <div className="text-xl">
                    {data.launch.success ? (
                      <div className="text-green-600">Successed</div>
                    ) : (
                      <div className="text-red-600">Failed</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 pt-2  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className=" ml-2 flex justify-around space-x-4">
                  <div className="text-xl font-semibold text-gray-600">
                    Detail:
                  </div>
                  <div className="text-xl text-gray-600">
                    {data.launch.details}
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
                <div className="ml-2 grid grid-cols-2 gap-8">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket Name:
                  </div>
                  <div className="text-xl text-gray-600">
                    {data.rocket.name}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2 grid grid-cols-2 gap-8">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket Country:
                  </div>
                  <div className="text-xl text-gray-600">
                    {data.rocket.country}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center h-16 p-4 my-6  rounded-lg border border-gray-100 shadow-md">
              <div className="flex items-center">
                <div className="ml-2 grid grid-cols-2 gap-8">
                  <div className="text-xl font-semibold text-gray-600">
                    Rocket Description:
                  </div>
                  <div className="text-xl text-gray-600">
                    {data.rocket.description}
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
