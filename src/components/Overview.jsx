import React, { useState, useEffect } from 'react';
import SidebarAdmin from '../sidebar/SidebarAdmin';
import { FaCirclePlus } from "react-icons/fa6";
import MyChart from './Chart';


function Overview() {
    const [ticketData, setTicketData] = useState({
        unresolvedTickets: 0,
        overdueTickets: 0,
        openTickets: 0,
        onHoldTickets: 0
    });
    const [unresolvedTicketCategories, setUnresolvedTicketCategories] = useState([]);
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        fetch('http://localhost:3001/tickets')
            .then(response => response.json())
            .then(data => {
                const counts = {
                    unresolvedTickets: data.filter(ticket => ticket.priority === 'HIGH').length,
                    overdueTickets: data.filter(ticket => ticket.priority === 'NORMAL').length, 
                    openTickets: data.filter(ticket => ticket.priority === 'LOW').length,
                    onHoldTickets: 0 
                };

                setTicketData(counts);
            });

        fetch('http://localhost:3001/unresolvedTicketCategories')
            .then(response => response.json())
            .then(data => setUnresolvedTicketCategories(data));

        fetch('http://localhost:3001/tasks')
            .then(response => response.json())
            .then(data => setTasks(data));
    }, []);


    return (
        <div className="bg-gray-100 min-h-screen flex">
            <SidebarAdmin />
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

                <div className="p-4">
                    <div className="grid grid-cols-4 gap-4 items-center justify-center font-plusJakarta">
                        <div className="bg-white rounded-lg items-center justify-center shadow-sm p-6 border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-center">
                            <h3 className="text-lg font-medium  mb-2">Unresolved</h3>
                            <span className="text-3xl font-medium ">{ticketData.unresolvedTickets}</span>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-center">
                            <h3 className="text-lg font-medium  mb-2">Overdue</h3>
                            <span className="text-3xl font-medium ">{ticketData.overdueTickets}</span>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-center">
                            <h3 className="text-lg font-medium  mb-2">Open</h3>
                            <span className="text-3xl font-medium ">{ticketData.openTickets}</span>
                        </div>
                        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-300 hover:border-blue-500 hover:text-blue-500 text-center">
                            <h3 className="text-lg font-medium  mb-2">On hold</h3>
                            <span className="text-3xl font-medium ">{ticketData.onHoldTickets}</span>
                        </div>
                    </div>

                   <div className="mt-8">
                        <div className="bg-white rounded-lg shadow-sm p-6 border">
                            <h3 className="text-lg font-plusJakarta font-semibold ">Today's trends</h3>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-gray-300 text-sm">as of 25 May 2019, 09:41 PM</span>

                            </div>
                            <div className="grid grid-cols-5">
                                <div
                                className="col-span-4"
                                >
                                <MyChart />

                                </div>
                                <div className="flex  flex-col">
                                    <div className='py-4 border-b text-center'>
                                        <h1 className="text-gray-400 text-xs">Resolved</h1>
                                        <p>449</p>
                                    </div>
                                    <div className='py-4 border-b text-center'>
                                        <h1 className="text-gray-400 text-xs">Received</h1>
                                        <p>426</p>
                                    </div>
                                    <div className='py-4 border-b text-center'>
                                        <h1 className="text-gray-400 text-xs">Averagae first response time</h1>
                                        <p>33m</p>
                                    </div>
                                    <div className='py-4 border-b text-center'>
                                        <h1 className="text-gray-400 text-xs">Averagae response time</h1>
                                        <p>3h 8m</p>
                                    </div>
                                    <div className='py-4 border-b text-center'>
                                        <h1 className="text-gray-400 text-xs">Resolution within SLA</h1>
                                        <p>94%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                            <div className='flex flex-row justify-between mb-4'>
                                <div className='font-plusJakarta'>
                                    <h3 className="text-lg font-semibold">Unresolved tickets</h3>
                                    <span className="text-xs font-thin text-gray-500">Group Support</span>
                                </div>
                                <a href="" className='text-sm font-semibold font-plusJakarta text-blue-400'>View Details</a>
                            </div>
                            <ul className='text-base font-plusJakarta flex-1 overflow-y-auto'>
                                {unresolvedTicketCategories.map((category) => (
                                    <li key={category.name} className="flex items-center justify-between py-4 border-b border-gray-300 last:border-none">
                                        <span>{category.name}</span>
                                        <span className="text-gray-500">{category.count}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col h-full">
                            <div className='flex flex-row justify-between mb-4'>
                                <div className='font-plusJakarta'>
                                    <h3 className="text-lg font-semibold">Task</h3>
                                    <span className="text-xs font-thin text-gray-500">Today</span>
                                </div>
                                <a href="" className='text-sm font-semibold font-plusJakarta text-blue-400'>View All</a>
                            </div>
                            <ul className='flex-1 overflow-y-auto'>
                                {tasks.map(task => (
                                    <li key={task.name} className="flex items-center justify-between py-4 border-b border-gray-300 last:border-none">
                                        <div className="flex items-center">
                                            <input type="checkbox" className="mr-2 rounded-full border-gray-300 focus:ring-blue-500 focus:border-blue-500" checked={task.completed || false} />
                                            <span>{task.name}</span>
                                        </div>
                                        <button className={`py-1 px-4 rounded ${task.status === 'urgent' ? 'bg-red-500 hover:bg-red-700' : task.status === 'new' ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-500 hover:bg-gray-700'} text-white font-bold`}>
                                            {task.status.toUpperCase()}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Overview;
