import React from "react";
import activityFeedData from "../data/ActivityFeedData";
 

const ActivityFeed = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 shadow-md">
      <h2 className="text-lg font-semibold mb-4">Activity Feed</h2>
      <ul className="space-y-3 text-sm text-gray-600">
        {activityFeedData.map((item, idx) => (
          <li key={idx}>
            <span className="font-medium">{item.time}: </span>
            {item.activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityFeed;
