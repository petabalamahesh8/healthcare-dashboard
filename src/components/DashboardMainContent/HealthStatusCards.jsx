import React from "react";
import healthStatusData from "../data/healthStatusData";
import { FaHeart, FaTachometerAlt, FaLungs, FaTint } from "react-icons/fa";
 
const iconMap = {
  heart: <FaHeart className="text-red-500" />,
  "blood-pressure": <FaTachometerAlt className="text-blue-500" />,
  lungs: <FaLungs className="text-green-500" />,
  "blood-drop": <FaTint className="text-pink-500" />,
};
const HealthStatusCards = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {healthStatusData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-4 shadow-md">
           <div className="text-3xl">{iconMap[item.icon]}</div>
            <div className="text-gray-500 text-sm">{item.title}</div>
            <div className="text-xl font-semibold">{item.value}</div>
          </div>
        ))}
      
      </div>
    </>
  );
};

export default HealthStatusCards;
