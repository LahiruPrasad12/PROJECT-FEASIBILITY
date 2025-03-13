import { useState } from "react";
import { Search, Eye, Edit, Trash2, Grid, User } from "lucide-react";
import prfImage from "../assets/images/profileImage.png"; // Replace with actual path
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const projects = [
    { title: "Secure digital banking platform", date: "08-02-2025" },
    { title: "Workflow automation for government agencies", date: "23-12-2024" },
    { title: "Secure digital banking platform", date: "08-02-2025" },
];

const Body = () => {
    return (
        <div className="p-6 flex-1 bg-gray-100">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Project List</h2>

                <div className="space-y-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="p-4 bg-gray-50 border rounded-lg flex flex-col sm:flex-row sm:items-center justify-between shadow-sm hover:shadow-md transition-all"
                        >
                            <div>
                                <p className="text-lg font-medium text-gray-800">{project.title}</p>
                                <p className="text-sm text-gray-500">{project.date}</p>
                            </div>

                            <div className="flex space-x-3 mt-3 sm:mt-0">
                                <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition">
                                    <Eye className="text-gray-600" />
                                </button>
                                <button className="p-2 rounded-lg bg-gray-200 hover:bg-blue-300 transition">
                                    <Edit className="text-gray-600" />
                                </button>
                                <button className="p-2 rounded-lg bg-gray-200 hover:bg-red-300 transition">
                                    <Trash2 className="text-gray-600" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectsPage = () => {
    return (
        <div className="flex h-screen">
            <NavBar />
            <div className="flex flex-col flex-1">
                <Header />
                <Body />
            </div>
        </div>
    );
};

export default ProjectsPage;
