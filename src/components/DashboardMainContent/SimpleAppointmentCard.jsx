import React from "react";

const SimpleAppointmentCard = ({ title, doctor, time }) => {
  return (
    <div className="bg-white border rounded-xl p-4 shadow-sm">
      <h3 className="text-md font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{doctor}</p>
      <p className="text-sm text-gray-400">{time}</p>
    </div>
  );
};

export default SimpleAppointmentCard;
