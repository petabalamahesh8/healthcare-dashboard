import DashboardOverview from "./DashboardOverview";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import Header from "../Headers/Header";
 

function DashboardMainContent() {
  return (
      <>
      
    <main className="w-full overflow-x-auto">
      <div className="flex min-w-[1000px] gap-6 p-6">
       
        <div className="flex flex-col gap-6 w-[600px] flex-shrink-0">
          <DashboardOverview />

          
          <div className="flex gap-4">
            <AnatomySection />
            <HealthStatusCards />
          </div>

         
          <ActivityFeed />
        </div>
 
         <div className="  flex flex-col bg-gray-100">
    
      <div className="flex flex-1">
        
        <main className="flex-1 p-6 overflow-y-auto">
          <CalendarView />
          <UpcomingSchedule/>
        </main>
      </div>
       
      </div> 
      </div>
    </main>
    </>
  );
}
export default DashboardMainContent;

