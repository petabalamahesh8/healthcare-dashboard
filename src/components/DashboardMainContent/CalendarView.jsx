import UpcomingSchedule from "./UpcomingSchedule";

function CalendarView() {
  return (
    <div className="w-full  bg-white px-2 rounded-xl shadow  ">
      <h3 className="text-md font-semibold mb-4">Calendar - October 2021</h3>
      <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-600">
        {Array.from({ length: 31 }).map((_, i) => (
          <div key={i} className="w-10 border p-2 rounded">
            {i + 1}
            {([1, 5, 10, 15].includes(i + 1)) && (
              <div className="text-xs mt-1 text-indigo-500 font-medium">
                {["09:00", "11:00", "13:00", "15:00"][i % 4]}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="p-3 bg-indigo-100 rounded mb-2">
          <strong>Dentist:</strong> 10:00 AM, Oct 5
        </div>
        <div className="p-3 bg-indigo-100 rounded">
          <strong>Physiotherapy:</strong> 2:00 PM, Oct 15
        </div>
      </div>
    </div>
  );
}
export default CalendarView;
