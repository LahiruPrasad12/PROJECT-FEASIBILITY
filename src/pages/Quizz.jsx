import { useState } from "react";
import { FaCheckSquare, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeasibilityAssessment = () => {
  const [selected, setSelected] = useState("organizational");
  const categories = [
    "Organizational Feasibility",
    "Technical Feasibility",
    "Operational Feasibility",
    "Financial Feasibility",
  ];

  const [answers, setAnswers] = useState(Array(5).fill(""));

  const handleSelect = (index, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-gray-100 min-h-screen items-center justify-center">
      {/* Left Section */}
      <div className="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            className={`flex items-center justify-between w-full px-4 py-3 text-lg font-semibold border-2 transition rounded-lg shadow-md ${
              selected === category ? "border-blue-500 bg-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
            {selected === category ? (
              <FaCheckCircle className="text-red-500" />
            ) : (
              <FaCheckSquare className="text-gray-700" />
            )}
          </button>
        ))}
        <button className="w-full py-3 text-lg bg-red-400 hover:bg-red-500 transition text-white font-semibold rounded-lg shadow-md">
          Submit
        </button>
      </div>

      {/* Right Section */}
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-md">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="mb-4">
            <p className="font-semibold">Question {i + 1}</p>
            <p className="text-gray-600 mb-2">
              How critical are the threats that this project might face?
            </p>
            <select
              className="w-full p-3 border rounded-lg shadow-sm bg-gray-50 focus:ring-2 focus:ring-indigo-300"
              value={answers[i]}
              onChange={(e) => handleSelect(i, e.target.value)}
            >
              <option value="">Select Answer</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
        ))}
        <div className="flex justify-between mt-4 text-indigo-500">
          <IoIosArrowBack className="text-3xl cursor-pointer hover:text-indigo-700 transition" />
          <IoIosArrowForward className="text-3xl cursor-pointer hover:text-indigo-700 transition" />
        </div>
      </div>
    </div>
  );
};

export default FeasibilityAssessment;
