import { useState, useEffect } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GetLocations } from "../../services/Auth.Apis";
import NoData from "../../images/FallBack.png";

import LocationCard from "../../components/LocationCard";

const ViewProgress = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await GetLocations();
      setData(response);
    };
    fetchData();
  }, []);
  if (data === undefined || null) {
    return (
      <div className="flex-row justify-center items-center font-bold text-2xl">
        <Link
          to={"/"}
          className="inline-flex items-center h-3 justify-center gap-2.5 rounded-full bg-bodydark  py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <span>
            <IoArrowBackSharp size={20} />
          </span>
          Go Back
        </Link>

        <div className="flex justify-center animate-pulse mt-3">
          <img
            src={NoData}
            className=" h-[400px] w-[400px] flex justify-center rounded-2xl"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="h-screen">
    <p className="flex animate-bounce justify-center text-2xl font-semibold bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
      Select The Location
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg overflow-hidden"
        >
          <LocationCard item={item} />
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ViewProgress;
