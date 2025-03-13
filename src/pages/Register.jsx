import React from "react";
import logo from "../assets/logo.png"; // Update with the correct path

const SignUp = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-white p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1440px]">
        
        {/* Left Side - Signup Form */}
        <div className="flex flex-col items-center lg:items-start lg:pl-[140px] w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-[50px] lg:text-[70px] font-extrabold text-[#eb5e28] mb-5">SIGN UP</h2>
          
          <input 
            type="text" 
            placeholder="Name..." 
            className="w-full max-w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />
          <input 
            type="email" 
            placeholder="Email..." 
            className="w-full max-w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />
          <input 
            type="tel" 
            placeholder="Mobile..." 
            className="w-full max-w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />
          <input 
            type="password" 
            placeholder="Password..." 
            className="w-full max-w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />
          <input 
            type="password" 
            placeholder="Re-enter Password..." 
            className="w-full max-w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />

          <button className="w-[258px] h-[60px] bg-[#eb5e28] rounded-[20px] text-white font-bold text-[18px] mt-5">
            Sign Up
          </button>

          <p className="text-[18px] mt-5 text-black">
            Already a member? <span className="font-extrabold text-[#eb5e28] cursor-pointer">Sign In</span>
          </p>
        </div>

        {/* Right Side - Logo Section */}
        <div className="hidden lg:flex justify-center items-center w-1/2">
          <img src={logo} alt="Discover Your Project" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;