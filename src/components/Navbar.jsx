import React from 'react'
import { FaSearch, FaThLarge, FaProjectDiagram, FaUser } from "react-icons/fa";
import prfImage from "../assets/images/profileImage.png"; // Replace with actual path

export default function Navbar() {
  return (
    <div className="w-64 h-screen bg-white p-5 flex flex-col gap-6 shadow-md">
      <div className="flex items-center gap-3">
        <img
          src={prfImage}
          alt="User"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h2 className="font-semibold">Shanki Mandeera</h2>
          <p className="text-sm text-gray-500">User</p>
        </div>
      </div>
      <nav className="flex flex-col gap-2">
        <button className="flex items-center gap-3 p-3 bg-black text-white rounded-md transition duration-300 ease-in-out hover:bg-gray-800">
          <FaThLarge /> Dashboard
        </button>
        <button className="flex items-center gap-3 p-3 bg-gray-200 rounded-md transition duration-300 ease-in-out hover:bg-gray-300">
          <FaProjectDiagram /> Projects
        </button>
        <button className="flex items-center gap-3 p-3 bg-gray-200 rounded-md transition duration-300 ease-in-out hover:bg-gray-300">
          <FaUser /> Account
        </button>
      </nav>
    </div>
  )
}
