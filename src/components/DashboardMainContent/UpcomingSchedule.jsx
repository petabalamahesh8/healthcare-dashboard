import React from "react";
import upcomingScheduleData from "../data/UpcomingScheduleData";
 

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Upcoming Schedule</h2>
      <div className="space-y-4">
        {upcomingScheduleData.map((item) => (
          <div key={item.id} className="border p-3 rounded-xl">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.doctor}</p>
            <p className="text-sm text-gray-400">{item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingSchedule;
