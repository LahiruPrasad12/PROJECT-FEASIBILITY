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
        <div className="p-6 flex-1">
            {projects.map((project, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center bg-gray-50 p-4 mb-2 rounded-lg shadow-sm"
                >
                    <span className="font-semibold">{project.title}</span>
                    <span className="text-gray-500">{project.date}</span>
                    <div className="flex space-x-3">
                        <button className="text-gray-600 hover:text-black"><Eye /></button>
                        <button className="text-gray-600 hover:text-black"><Edit /></button>
                        <button className="text-gray-600 hover:text-black"><Trash2 /></button>
                    </div>
                </div>
            ))}
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
