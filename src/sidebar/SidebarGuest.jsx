import { FaFolderOpen, FaChartPie } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdContacts } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';


export default function SidebarGuest() {
    return (
        <>

            <div className="fixed left-0 top-0 w-64 h-full bg-gray-900">
                <div className="flex items-center justify-center h-16 border-b border-gray-800">
                    <div className="bg-blue-500 rounded-full p-2">
                        <FaFolderOpen className="text-xl text-white" />
                    </div>
                    <div className="text-white text-lg font-semibold font-plusJakarta ml-2">
                        Dashboard Kit
                    </div>
                </div>
                <div className="flex flex-col items-start mt-10 p-4 space-y-2">
                        <NavLink
                            end
                            to="">
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">

                            <FaChartPie className="text-gray-300 text-xl" />
                            <h1 className="text-gray-300 text-lg font-plusJakarta">Overview</h1>
                    </div>
                        </NavLink>
                        <NavLink
                            end
                            to="">
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">
                            <FaTicketAlt className="text-gray-300 text-xl" />
                            <h1 className="text-gray-300 text-lg font-plusJakarta">Tickets</h1>
                    </div>
                        </NavLink>
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">
                        <FaLightbulb className="text-gray-300 text-xl" />
                        <h1 className="text-gray-300 text-lg font-plusJakarta">Ideas</h1>
                    </div>
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">
                        <IoMdContact className="text-gray-300 text-xl" />
                        <h1 className="text-gray-300 text-lg font-plusJakarta">Contacts </h1>
                    </div>
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">
                        <MdContacts className="text-gray-300 text-xl" />
                        <h1 className="text-gray-300 text-lg font-plusJakarta">Agents</h1>
                    </div>
                    <div className="flex items-center space-x-4 w-full p-2 rounded hover:bg-gray-800">
                        <FaBook className="text-gray-300 text-xl" />
                        <h1 className="text-gray-300 text-lg font-plusJakarta">Articles</h1>
                    </div>
                    <div className="flex flex-col items-start justify-start h-16 mt-8 border-t space-y-3 border-gray-800">
                        <div className="flex  space-x-4 w-full p-2 rounded hover:bg-gray-800">
                            <IoMdSettings className="text-gray-300 text-xl" />
                            <h1 className="text-gray-300 text-lg font-plusJakarta">Settings</h1>
                        </div>
                        <div className="flex items-start space-x-4 w-full p-2 rounded hover:bg-gray-800">
                            <PiMedalFill className="text-gray-300 text-xl" />
                            <h1 className="text-gray-300 text-lg font-plusJakarta">Subscription</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
