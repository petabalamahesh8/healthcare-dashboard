import {
  LayoutDashboard,
  BarChart,
  CalendarDays,
  ClipboardList,
  FileText,
  PieChart,
  TestTube,
  LifeBuoy,
  MessageCircle,
  Settings,
} from "lucide-react";

const iconMap = {
  LayoutDashboard,
  BarChart,
  CalendarDays,
  ClipboardList,
  FileText,
  PieChart,
  TestTube,
  LifeBuoy,
  MessageCircle,
  Settings,
};

export { navigationLinks, iconMap };


import navigationLinks from "../data/navigationLinks";

function SideBar() {
  return (
  <>
    <div className="w-64 h-full bg-white shadow-md p-6">
       
      <ul className="space-y-4 text-gray-700">
    {navigationLinks.map((link, index) => {
  const IconComponent = iconMap[link.icon];
  return (
    <div key={index} className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded">
      {IconComponent && <IconComponent className="w-5 h-5 text-gray-700" />}
      <span>{link.name}</span>
    </div>
  );
})}
      </ul>
    </div>
    </>

  );
}

export default SideBar;
