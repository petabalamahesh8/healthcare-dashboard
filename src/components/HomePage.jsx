import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardMainContent from "./DashboardMainContent/DashboardMainContent";
 
const Home =()=>{

  const navigate=useNavigate()
   
      
    return(
        <>
    <div className="min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
        
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 leading-tight">
          Your Health, Our Priority
        </h1>
        <p className="text-gray-600 text-lg">
          Empowering you with modern healthcare services and real-time tracking. Get personalized care at your fingertips.
        </p>

        <button  onClick={()=>navigate("/Dashboard")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition duration-300">
          Get Started
        </button>
      </div>

      
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src="https://whatfix.com/blog/wp-content/uploads/2023/06/PatientPortal.jpg"
          alt="Healthcare"
          className="rounded-2xl shadow-xl max-w-full h-auto"
        />
      </div>
    </div>
 
 

        </>
    )

}
export default Home ;