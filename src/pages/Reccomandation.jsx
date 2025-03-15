import { useState } from "react";
import { Search, ArrowLeft } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import NavBar from "../components/Navbar";

const Body = () => {
    const [search, setSearch] = useState("");
    const [fromDate, setFromDate] = useState("08/02/2025");
    const [toDate, setToDate] = useState("08/02/2025");
    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col">
            <div className="flex justify-between items-center mb-4">
                <button className="p-2 bg-white rounded-full shadow hover:bg-gray-200 transition">
                    <ArrowLeft size={20} />
                </button>
                <div className="relative w-full max-w-xs">
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-10 p-2 bg-white border rounded-full text-gray-600 focus:outline-none"
                    />
                </div>
            </div>

            {/* Recommendation Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <h2 className="text-lg font-bold text-orange-600">Secure digital banking platform</h2>
                <div className="flex flex-col sm:flex-row justify-between items-center my-4 gap-4">
                    <span className="text-4xl font-bold">42%</span>
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                        Highly Feasible
                    </span>
                </div>

                {/* Feasibility Sections */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-blue-700 font-bold">Organizational Feasibility</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
                            porttitor ex vel porttitor. Aliquam quis purus sed odio vehicula finibus eget
                            tempor justo.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-700 font-bold">Technical Feasibility</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
                            porttitor ex vel porttitor. Aliquam quis purus sed odio vehicula finibus eget
                            tempor justo.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-700 font-bold">Operational Feasibility</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
                            porttitor ex vel porttitor. Aliquam quis purus sed odio vehicula finibus eget
                            tempor justo.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-blue-700 font-bold">Financial Feasibility</h3>
                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
                            porttitor ex vel porttitor. Aliquam quis purus sed odio vehicula finibus eget
                            tempor justo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Recommendation = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen overflow-auto">
            <NavBar />
            <div className="flex flex-col flex-1">
                <Body />
            </div>
        </div>
    );
};

export default Recommendation;
