import React from "react";
import logo from "../assets/logo.png"; // Replace with actual path
import discoverImage from "../assets/logo.png"; // Replace with actual path

const SignIn = () => {
  return (
    <div className="relative w-screen h-screen bg-white flex items-center justify-center">
      <div className="flex w-[1440px] h-[1024px]">
        {/* Left Side - Sign In Form */}
        <div className="w-1/2 flex flex-col items-start pl-[140px]">
          <h2 className="absolute top-[271px] left-[131px] text-[70px] font-extrabold text-[#EB5E28] font-inter">
            SIGN IN
          </h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email..."
            className="absolute top-[410px] left-[131px] w-[467px] h-[54px] bg-[#EAEAEA] rounded-[20px] pl-5 text-[21px] text-black font-poppins"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password..."
            className="absolute top-[491px] left-[131px] w-[467px] h-[54px] bg-[#EAEAEA] rounded-[20px] pl-5 text-[21px] text-black font-poppins"
          />

          {/* Forgot Password */}
          <p className="absolute top-[577px] left-[131px] text-[20px] font-poppins text-black">
            Forgot Password?
          </p>

          {/* Sign In Button */}
          <button className="absolute top-[632px] left-[131px] w-[258px] h-[60px] bg-[#EB5E28] text-white text-[18px] font-bold font-poppins rounded-[20px] flex items-center justify-center">
            Sign In
          </button>

          {/* Sign Up Section */}
          <p className="absolute top-[740px] left-[131px] text-[20px] font-poppins text-black">
            Not a member ?
          </p>
          <span className="absolute top-[742px] left-[300px] text-[20px] font-extrabold font-poppins text-[#EB5E28]">
            Sign Up
          </span>
        </div>

        {/* Right Side - Logo Section */}
        <div >
          <div className="absolute top-[205px] w-[746px] h-[672px] flex flex-col items-center">
            <img
              src={discoverImage}
              alt="Discover Your Project"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
