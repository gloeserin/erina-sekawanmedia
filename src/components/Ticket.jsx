import React, { useEffect, useState } from 'react';
import SidebarAdmin from '../sidebar/SidebarAdmin';
import { HiDotsVertical } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";


function TicketTable({ tickets }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage, setRowsPerPage] = useState(8);

    const indexOfLastTicket = currentPage * rowsPerPage;
    const indexOfFirstTicket = indexOfLastTicket - rowsPerPage;
    const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

    const totalPages = Math.ceil(tickets.length / rowsPerPage);

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const handleRowsPerPageChange = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setCurrentPage(1); 
    };

    return (
        <div className="relative">
            <table className="min-w-full bg-white border-gray-300 rounded-md shadow-sm">
                <thead className="bg-white border-b border-gray-300">
                    <tr>
                        <th className="p-4 text-left text-gray-600">Customer</th>
                        <th className="p-4 text-left text-gray-600">Customer Name</th>
                        <th className="p-4 text-left text-gray-600">Priority</th>
                        <th className="p-4 text-left text-gray-600">Ticket Details</th>
                    </tr>
                </thead>
                <tbody className='font-plusJakarta'>
                    {currentTickets.map((ticket, index) => (
                        <tr key={index} className="border-b border-gray-300">
                            <td className="p-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img
                                            src={ticket.ticketDetails.image}
                                            alt={ticket.ticketDetails.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="text-gray-700 font-medium">
                                            {ticket.ticketDetails.title}
                                        </h4>
                                        <p className="text-gray-500 text-sm">
                                            {ticket.ticketDetails.description}
                                        </p>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4 flex items-center gap-4">
                                <div>
                                    <h4 className="text-gray-700 font-medium">
                                        {ticket.customerName}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {ticket.previous}
                                    </p>
                                </div>
                            </td>
                            <td className="p-4">
                                <div>
                                    <h4 className="text-gray-700 font-medium">
                                        {ticket.date}
                                    </h4>
                                    <p className="text-gray-500 text-sm">
                                        {ticket.hour}
                                    </p>
                                </div>
                            </td>
                            <td className="p-4">
                                <div className='flex flex-row gap-x-4'>
                                    <span
                                        className={`px-3 py-1 rounded-full text-white font-plusJakarta font-medium text-sm ${ticket.priority === 'HIGH'
                                            ? 'bg-red-500'
                                            : ticket.priority === 'NORMAL'
                                                ? 'bg-green-500 text-sm'
                                                : 'bg-yellow-400 text-sm'
                                            }`}
                                    >
                                        {ticket.priority}
                                    </span>
                                    <div className='items-end justify-end'>
                                        <HiDotsVertical className="text-gray-500 " />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex flex-row items-end justify-end mt-4 space-x-2">
                <div className="flex items-center justify-between w-full max-w-xs mb-2">
                    <button
                        className="text-gray-500 p-2 rounded-md"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <IoIosArrowBack className="text-gray-600 -mr-1" /> {/* Reduced margin-right */}
                    </button>
                    <span className="text-gray-600 text-sm mx-1">
                        {indexOfFirstTicket + 1}-{Math.min(indexOfLastTicket, tickets.length)} of {tickets.length}
                    </span>
                    <button
                        className="text-gray-500 p-2 rounded-md"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <IoIosArrowForward className="text-gray-600 -ml-1" /> {/* Reduced margin-left */}
                    </button>
                </div>

                <div className="flex items-center">
                    <select
                        className="p-2 border rounded-md text-gray-600 mr-2"
                        value={rowsPerPage}
                        onChange={handleRowsPerPageChange}
                    >
                        <option value={8}>8 rows per page</option>
                        <option value={16}>16 rows per page</option>
                        <option value={32}>32 rows per page</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

function AdminSidebar() {
    return (
        <div className="w-64 bg-gray-800 text-white h-full">
            <div className="p-4">
                <SidebarAdmin />
            </div>
        </div>
    );
}

function Header() {
    return (
        <div className="flex items-center justify-between mb-6 bg-white shadow-sm p-4 rounded-lg">
            <div className="font-semibold text-lg font-plusJakarta">Tickets</div>
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
    );
}

function App() {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tickets')
            .then(response => response.json())
            .then(data => setTickets(data))
            .catch(error => console.error('Error fetching tickets:', error));
    }, []);

    return (
        <div className="flex">
            <AdminSidebar />
            <div className="flex-1 p-4">
                <Header />
                <div className="bg-white border border-gray-300 rounded-md shadow-sm font-plusJakarta">
                    <div className="flex items-center justify-between p-4 border-b border-gray-300">
                        <h1 className="text-2xl font-bold">All tickets</h1>
                        <div className="flex gap-2">
                            <button className="text-gray-500 px-4 py-2 rounded-md flex items-center gap-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 10l5 5 5-5H7z"></path>
                                </svg>
                                Filter
                            </button>
                            <button className=" text-gray-500 px-4 py-2 rounded-md flex items-center gap-1">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                                Sort
                            </button>
                        </div>
                    </div>
                    <TicketTable tickets={tickets} />
                </div>
            </div>
        </div>
    );
}

export default App;
