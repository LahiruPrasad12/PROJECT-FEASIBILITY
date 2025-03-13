import React from "react";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const Body = () => (
  <div className="p-6 bg-gray-100 min-h-screen">
    {/* Top Metrics */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow-md text-center col-span-1 h-62 flex flex-col justify-center">
        <p className="text-red-500 font-semibold">Total Projects</p>
        <p className="text-4xl font-bold">3</p>
      </div>
      <div className="grid grid-cols-3 gap-4 col-span-3">
        <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
          <p className="text-green-600 font-semibold">Highly Feasible Projects</p>
          <p className="text-3xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
          <p className="text-blue-600 font-semibold">Moderately Feasible Projects</p>
          <p className="text-3xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center">
          <p className="text-yellow-500 font-semibold">Marginally Feasible Projects</p>
          <p className="text-3xl font-bold">1</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md text-center h-32 flex flex-col justify-center col-span-3">
          <p className="text-red-500 font-semibold">Not Feasible Projects</p>
          <p className="text-3xl font-bold">0</p>
        </div>
      </div>
    </div>

    {/* Latest Report */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <p className="font-semibold">Latest Report</p>
        <p className="text-gray-500 text-sm">09/02/2025</p>
      </div>
      <div className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
        <div>
          <p className="text-red-500 font-semibold">Secure digital banking platform</p>
          <p className="text-4xl font-bold">42%</p>
        </div>
        <span className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Highly Feasible</span>
      </div>
    </div>
  </div>
);

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