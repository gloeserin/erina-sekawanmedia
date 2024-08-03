import React from "react";
import Sidebar from "../sidebar/SidebarAdmin";
import WelcomeBanner from "../components/WelcomeBanner";
import { Outlet } from "react-router-dom"; 

const AdminDashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-4">
        <Outlet /> 
      </div>
    </div>
    
  );
};

export default AdminDashboard;



