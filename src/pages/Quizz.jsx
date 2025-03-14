import { useState } from "react";
import axios from "axios";
import { FaCheckSquare, FaCheckCircle } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FeasibilityAssessment = () => {
  const [selectedCategory, setSelectedCategory] = useState("Organizational Feasibility");
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState(Array(20).fill(""));
  
  const categories = ["Organizational Feasibility", "Operational Feasibility"];
  const questionsPerPage = 5;
  
  const questions = {
    "Organizational Feasibility": [
      "How well does this project align with the organization’s strategic goals?",
      "How much does the project contribute to achieving long-term organizational objectives?",
      "How supportive are the organization’s senior management of this project?",
      "How aligned are the project’s outcomes with the organization’s mission and vision?",
      "How well does the project leverage the organization’s core competencies?",
      "How do you assess the strengths of this project in relation to the organization’s capabilities?",
      "How significant are the weaknesses of this project within the organization?",
      "What level of opportunity does this project present for the organization?",
      "How critical are the threats that this project might face?",
      "How effective are the organization’s strategies in leveraging the project’s strengths?",
      "How supportive are the key stakeholders towards this project?",
      "How significant are the concerns raised by stakeholders regarding this project?",
      "How well are stakeholder expectations managed throughout the project?",
      "How engaged are stakeholders in the project planning and execution phases?",
      "How effectively are stakeholder communications handled in this project?",
      "How compatible is the current organizational structure with the needs of the project?",
      "How well do the reporting lines support the project’s implementation?",
      "How flexible is the organizational structure in accommodating project changes?",
      "How well does the organizational structure facilitate communication and collaboration for the project?",
      "How supportive are the organizational policies and procedures for the project?",
    ],
    "Operational Feasibility": [
      "How well does the current system align with operational goals?",
      "Is the current system scalable for future business growth?",
      "Does the current system meet user performance expectations?",
      "How adaptable is the current system to process changes?",
      "Is the level of automation in the current system sufficient?",
      "Does the current system provide adequate support for decision-making?",
      "How well does the system integrate with other operational systems?",
      "How effective is the current system in ensuring data accuracy?",
      "Can the current system be easily maintained by existing staff?",
      "Is there enough documentation available for the current system?",
      "How well does the current system align with regulatory requirements?",
      "Is the current system prone to frequent failures or downtime?",
      "Does the current system provide real-time access to data?",
      "How efficiently does the current system manage resources?",
      "Does the current system support collaboration among departments?",
      "How well is the current system aligned with operational best practices?",
      "Can the current system be customized to meet unique operational needs?",
      "Does the company currently have other ongoing projects that might compete for resources?",
      "Will the simultaneous management of other projects impact the success of the new system?",
      "Are there potential delays in project timelines due to resource allocation conflicts with other ongoing projects?",
    ],
  };

  const handleSelect = (index, value) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  };

  const handleSubmit = async () => {
    const payload = {};
    answers.forEach((answer, index) => {
      payload[`Q${index + 1}`] = answer || "N/A";
    });

    const apiUrl = selectedCategory === "Organizational Feasibility"
      ? "http://127.0.0.1:5000/api/organizational"
      : "http://127.0.0.1:5000/api/operational";

    try {
      const response = await axios.post(apiUrl, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log("API Response:", response.data);
      alert("Assessment submitted successfully!");
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit assessment. Please try again.");
    }
  };

  const startIndex = currentPage * questionsPerPage;
  const displayedQuestions = questions[selectedCategory].slice(startIndex, startIndex + questionsPerPage);
  const isSubmitDisabled = answers.includes("");

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-gray-100 min-h-screen items-center justify-center">
      <div className="flex flex-col gap-4 bg-white p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-sm">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => { setSelectedCategory(category); setCurrentPage(0); }}
            className={`flex items-center justify-between w-full px-4 py-3 text-lg font-semibold border-2 transition rounded-lg shadow-md ${
              selectedCategory === category ? "border-blue-500 bg-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
            {selectedCategory === category ? <FaCheckCircle className="text-red-500" /> : <FaCheckSquare className="text-gray-700" />}
          </button>
        ))}
        <button
          className={`w-full py-3 text-lg font-semibold rounded-lg shadow-md ${isSubmitDisabled ? "bg-gray-400 cursor-not-allowed" : "bg-red-400 hover:bg-red-500 text-white"}`}
          onClick={handleSubmit}
          disabled={isSubmitDisabled}
        >
          Submit
        </button>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg w-full max-w-xs md:max-w-md">
        {displayedQuestions.map((question, i) => (
          <div key={i + startIndex} className="mb-4">
            <p className="font-semibold">Question {i + 1 + startIndex}</p>
            <p className="text-gray-600 mb-2">{question}</p>
            <select
              className="w-full p-3 border rounded-lg shadow-sm bg-gray-50"
              value={answers[i + startIndex]}
              onChange={(e) => handleSelect(i + startIndex, e.target.value)}
            >
              <option value="">Select Answer</option>
              <option value="A1">Low</option>
              <option value="A2">Medium</option>
              <option value="A3">High</option>
            </select>
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => prev - 1)}>
            <IoIosArrowBack className="text-3xl" />
          </button>
          <button disabled={startIndex + questionsPerPage >= questions[selectedCategory].length} onClick={() => setCurrentPage((prev) => prev + 1)}>
            <IoIosArrowForward className="text-3xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeasibilityAssessment;