import React from "react";
import Sidebar from "../sidebar/SidebarGuest";
import WelcomeBanner from "../components/WelcomeBanner";

import { Outlet } from "react-router-dom"; 

const GuestDashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className='flex-grow p-6 ml-64'>
                <div className="flex items-center justify-between mb-6 bg-white shadow-sm p-4 rounded-lg">
                    <div className="font-semibold text-lg font-plusJakarta">Overview</div>
                    <div className="flex items-center">
                        <div className="flex items-center mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6z"
                                />
                            </svg>
                        </div>
                        <div className="flex items-center mr-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 10a2 2 0 110-4 2 2 0 010 4zm-8 0a2 2 0 110-4 2 2 0 010 4zm8 0a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="rounded-full w-8 h-8"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
                                alt="profile picture"
                            />
                            <span className="ml-2 font-medium text-gray-800">Jones Ferdinand</span>
                        </div>
                    </div>

                </div>
                <WelcomeBanner />
                <Outlet /> 
            </div>

        </div>
    );
};

export default GuestDashboard;
