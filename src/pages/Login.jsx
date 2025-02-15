import React from "react";
import logo from "../assets/logo.png"; // Replace with actual path
import discoverImage from "../assets/logo.png"; // Replace with actual path

const SignIn = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="flex flex-row w-[90%] max-w-[1440px]">
        {/* Left Side - Sign In Form */}
        <div className="flex flex-col items-start pl-[160px] w-1/2 mt-10">
          <h2 className="text-[70px] font-extrabold text-[#eb5e28] mb-5">SIGN IN</h2>

          {/* Email Input */}
          <input
            type="email"
            placeholder="Email..."
            className="w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password..."
            className="w-[467px] h-[54px] bg-[#eaeaea] rounded-[20px] px-4 text-[21px] mb-4 outline-none"
          />

          {/* Forgot Password */}
          <p className="left-[131px] text-[20px] font-poppins text-black">
            Forgot Password?
          </p>

          {/* Sign In Button */}
          <button className="w-[258px] h-[60px] bg-[#eb5e28] rounded-[20px] text-white font-bold text-[18px] mt-5">
            Sign In
          </button>

          {/* Sign Up Section */}
          <p className="text-[20px] mt-5 text-black">
            Not a member? <span className="font-extrabold text-[#eb5e28] cursor-pointer">Sign Up</span>
          </p>
        </div>

        {/* Right Side - Logo Section */}
        <div className="flex justify-center items-center w-1/2">
          <img src={logo} alt="Discover Your Project" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
