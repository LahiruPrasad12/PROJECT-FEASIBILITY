import React, { useState } from 'react';
import { FaSearch, FaThLarge, FaProjectDiagram, FaUser, FaBars, FaTimes } from "react-icons/fa";
import prfImage from "../assets/images/profileImage.png"; // Replace with actual path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar for larger screens */}
      <div className={`w-64 h-screen bg-white p-5 flex flex-col gap-6 shadow-md fixed md:relative transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-64'} md:translate-x-0`}>
        <div className="flex items-center justify-between md:justify-start gap-3">
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
          {/* Close button for mobile */}
          <button className="md:hidden text-gray-600" onClick={() => setIsOpen(false)}>
            <FaTimes size={20} />
          </button>
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

      {/* Mobile Navbar Toggle Button */}
      <button className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md" onClick={() => setIsOpen(true)}>
        <FaBars size={20} />
      </button>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-3 flex justify-around shadow-md md:hidden">
        <button className="flex flex-col items-center text-gray-700">
          <FaThLarge />
          <span className="text-xs">Dashboard</span>
        </button>
        <button className="flex flex-col items-center text-gray-700">
          <FaProjectDiagram />
          <span className="text-xs">Projects</span>
        </button>
        <button className="flex flex-col items-center text-gray-700">
          <FaUser />
          <span className="text-xs">Account</span>
        </button>
      </div>
    </>
  );
}