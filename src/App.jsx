import React from "react";
import Header from "./components/Headers/Header";

import SideBar from "./components/sidebar/SiderBar";
import DashboardMainContent from "./components/DashboardMainContent/DashboardMainContent";
 

const App = () => {
  return (
    <>
      <div className="  flex flex-col bg-gray-100">
        <Header />

        <div className="flex flex-1">
          <SideBar />

          <main className="flex-1 p-6 overflow-y-auto">
          <DashboardMainContent />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
