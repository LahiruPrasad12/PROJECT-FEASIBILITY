import { useState } from "react";
import { FaSearch, FaThLarge, FaProjectDiagram, FaUser } from "react-icons/fa";
import Header from "../components/Header";
import NavBar from "../components/Navbar";

const Card = ({ title, status, color }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg text-center flex-1 transition-all duration-300 hover:shadow-xl">
    <h3 className="text-lg font-bold text-orange-500">{title}</h3>
    <span className={`mt-3 inline-block px-6 py-3 text-white rounded-full ${color}`}>{status}</span>
  </div>
);

const Body = () => (
  <div className="p-6 flex flex-col gap-8 bg-gray-100">
    <h2 className="text-xl font-bold text-gray-700">Latest Report</h2>
    <div className="flex gap-6 justify-center w-full">
      <Card title="Organizational Feasibility" status="Highly Feasible" color="bg-green-500" />
      <Card title="Technical Feasibility" status="Moderately Feasible" color="bg-blue-500" />
      <Card title="Operational Feasibility" status="Marginally Feasible" color="bg-orange-500" />
      <Card title="Financial Feasibility" status="Not Feasible" color="bg-red-500" />
    </div>
    <div className="bg-white p-6 rounded-xl shadow-lg w-full flex justify-between items-center transition-all duration-300 hover:shadow-xl">
      <div>
        <h3 className="text-orange-500 font-bold text-lg">Secure Digital Banking Platform</h3>
        <p className="text-4xl font-bold text-gray-800">42%</p>
        <p className="text-orange-500 font-semibold mt-2 cursor-pointer hover:underline">Recommendations -&gt;</p>
      </div>
      <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-semibold">Highly Feasible</span>
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