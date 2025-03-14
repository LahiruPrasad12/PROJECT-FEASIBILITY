import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const Body = () => {
  const [projects, setProjects] = useState([]);
  const [latestProject, setLatestProject] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email) {
      fetchProjects(user.email);
    }
  }, []);

  const fetchProjects = async (email) => {
    try {
      const response = await axios.get(`http://127.0.0.1:5000/api/projects?email=${email}`, {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
      setProjects(response.data.projects);

      if (response.data.projects.length > 0) {
        setLatestProject(response.data.projects[response.data.projects.length - 1]);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  // Categorizing projects based on feasibility
  const totalProjects = projects?.length;
  const highlyFeasible = projects?.filter(p => p.feasibility === "Highly Feasible")?.length;
  const moderatelyFeasible = projects?.filter(p => p.feasibility === "Moderately Feasible")?.length;
  const marginallyFeasible = projects?.filter(p => p.feasibility === "Marginally Feasible")?.length;
  const notFeasible = projects?.filter(p => p.feasibility === "Not Feasible")?.length;

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-1 h-62 flex flex-col justify-center">
          <p className="text-red-500 font-semibold">Total Projects</p>
          <p className="text-4xl font-bold">{totalProjects}</p>
        </div>
        <div className="grid grid-cols-3 gap-4 col-span-3">
          <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
            <p className="text-green-600 font-semibold">Highly Feasible Projects</p>
            <p className="text-3xl font-bold">{highlyFeasible}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
            <p className="text-blue-600 font-semibold">Moderately Feasible Projects</p>
            <p className="text-3xl font-bold">{moderatelyFeasible}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
            <p className="text-yellow-500 font-semibold">Marginally Feasible Projects</p>
            <p className="text-3xl font-bold">{marginallyFeasible}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center col-span-3">
            <p className="text-red-500 font-semibold">Not Feasible Projects</p>
            <p className="text-3xl font-bold">{notFeasible}</p>
          </div>
        </div>
      </div>

      {/* Latest Report */}
      {latestProject && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">Latest Report</p>
            <p className="text-gray-500 text-sm">{new Date().toLocaleDateString()}</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
            <div>
              <p className="text-red-500 font-semibold">{latestProject.file_name}</p>
              <p className="text-4xl font-bold">{latestProject.feasibility_score || "N/A"}%</p>
            </div>
            <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
              {latestProject.feasibility || "N/A"}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => (
  <div className="flex h-screen">
    <NavBar />
    <div className="flex-1 flex flex-col bg-gray-100">
      <Header />
      <Body />
    </div>
  </div>
);

export default Dashboard;
