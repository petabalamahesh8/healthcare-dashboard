import React from "react";
import healthStatusData from "../data/healthStatusData";


const HealthStatusCards = () => {
  return (
 <>
 <div className="flex flex-col gap-4">
  {healthStatusData.map((item, index) => (
 <div key={index} className="bg-white rounded-2xl p-4 shadow-md">
          <div className="text-3xl mb-2">{item.icon}</div>
          <div className="text-gray-500 text-sm">{item.title}</div>
          <div className="text-xl font-semibold">{item.value}</div>
        </div>
  ))}
   <div className="font-medium ">Detiles--|</div>
</div>
 
 </>
  );
};

export default HealthStatusCards;
