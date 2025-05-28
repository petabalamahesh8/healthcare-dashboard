const calendarAppointments = [
  { date: 12, time: "10:00 AM", patient: "Patient A", purpose: "Checkup" },
  { date: 13, time: "1:30 PM", patient: "Patient B", purpose: "Consultation" },
];

const upcomingAppointments = [
  {
    patient: "Patient A",
    time: "10:00 AM",
    description: "General Checkup",
  },
  {
    patient: "Patient B",
    time: "11:30 AM",
    description: "Consultation",
  },
  {
    patient: "Patient C",
    time: "2:00 PM",
    description: "Lab Test",
  },
];

export { calendarAppointments, upcomingAppointments };
