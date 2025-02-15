import React from "react";
import image1 from "../assets/images/img1.jpg"; // Replace with actual path
import prfImage from "../assets/images/profileImage.png"; // Replace with actual path
import HDimg from "../assets/images/header.png"; // Replace with actual path
import step1Image from "../assets/images/sideIMG2.png"; // Replace with actual path

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-white shadow-md z-50">
            <div className="flex items-center gap-2">
                <img src={HDimg} alt="Logo" className="w-10 h-10 rounded-full" />
                <span className="text-2xl font-bold">
                    <span className="text-black">S</span>
                    <span className="text-orange-500">D</span>
                    <span className="text-black">S</span>
                    <span className="text-orange-500">N</span>
                </span>
            </div>
            <div className="flex items-center gap-2">
                <img src={prfImage} alt="User" className="w-10 h-10 rounded-full" />
                <div>
                    <p className="text-gray-900 font-medium">Shanki Mandeera</p>
                    <p className="text-gray-500 text-sm">User</p>
                </div>
            </div>
        </header>
    );
};

const WhyChooseUs = () => {
    return (
        <section className="w-full bg-gray-100 text-center py-10 px-6 md:px-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-700 max-w-4xl mx-auto text-lg leading-relaxed">
                Conduct a comprehensive feasibility analysis to assess financial, organizational, technical,
                and operational viability before investing. Leverage advanced OCR technology for precise
                smart information extraction, ensuring key project details are captured accurately. Enjoy
                seamless integration with your existing systems for smooth workflow management.
                Designed for business analysts and project managers, this solution enables fast, accurate
                decision-making in high-pressure environments.
            </p>
        </section>
    );
};

const Step1Download = () => {
    return (
        <div className="flex flex-col items-start p-12 bg-white w-full max-w-7xl mx-auto">
            {/* Title Section */}
            <h3 className="text-gray-700 text-lg font-medium">Step 1</h3>
            <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
                Download Project Proposal Template
            </h2>

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row items-center w-full mt-6">
                {/* Left Side - Image */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src={step1Image}
                        alt="Team Collaboration"
                        className="w-96 h-auto"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="md:w-1/2 text-left md:pl-12">
                    <ul className="text-gray-700 space-y-4 text-lg leading-relaxed">
                        <li>
                            <strong>Download the Template</strong> – Click the Download button below to get the project proposal form.
                        </li>
                        <li>
                            <strong>Fill Out the Form</strong> – Enter all required project details in the downloaded template.
                        </li>
                        <li>
                            <strong>Proceed to Upload</strong> – Once completed, continue to the next step to upload your filled form.
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="mt-6 flex space-x-6">
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 text-lg">
                            Download Form
                        </button>
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 text-lg">
                            Go to Step 2
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectPlanning = () => {
    return (
        <div className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-20">
            <Header />
            <div className="relative w-[1300px] h-[550px] flex items-center justify-center">
                <div className="absolute left-0 top-12 w-[657px] px-6 md:px-12">
                    <h1 className="font-poppins font-extrabold text-[50px] leading-[75px] text-gray-900">
                        Smarter Project Planning
                    </h1>
                    <h2 className="font-poppins font-extrabold text-[50px] leading-[75px] text-orange-500 mt-2">
                        Starts with the Right Feasibility Check
                    </h2>
                    <button className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition">
                        Get Started
                    </button>
                </div>
                <div className="absolute right-0 top-0 w-[619px] flex justify-center">
                    <img src={image1} alt="Project Planning" className="w-full h-full" />
                </div>
            </div>
            <WhyChooseUs />
            <Step1Download />
        </div>
    );
};

export default ProjectPlanning;
