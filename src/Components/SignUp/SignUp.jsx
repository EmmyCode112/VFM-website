import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import logo from "/public/VFM-LOGO.png";
import loginPng from "/public/login-img.png";

const SignUp = () => {
  const joined = false;

  return (
    <div className="signup">
      <div className="image">
        <img src={loginPng} className="w-[80%] h-[100vh]" alt="" />
      </div>
      <div className="form-container relative">
        <div className="logo absolute right-5 top-5 z-30">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
        </div>
        {joined ? (
          <div className="thanks-message flex flex-col items-end pr-[77px] pt-[51px] gap-[200px]">
            <div className="flex flex-col gap-[43px] justify-center h-[80vh] items-center text-center">
              <h2 className="text-[40px] w-[90%] font-[500] leading-[59px]">
                Thank you for joining the VFM waitlist! 🌟
              </h2>
              <p className="text-[18px] font-[400]">
                You're now part of an exclusive group that will be among the
                first to experience the magic of Afyaa. 🚀
              </p>
              <Link to={"/"}>
                <button className="w-[60%] btn bg-[#91be1d] h-[99px] rounded-[20px]">
                  Go to Homepage
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <p className="mt-[89px] mb-[55px] text-center text-white text-[30px] leading-[33px] font-[400]">
              Welcome to VFM
            </p>
            <div className="flex flex-col gap-[60px]">
              <form className="flex flex-col gap-[35px] text-center">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <button className="btn" type="submit">
                  JOIN WISHLIST
                </button>
              </form>
              <div className="flex flex-col items-center gap-[15px] social">
                <button className="flex w-[60%] rounded-[100px] gap-[20px] border-[2px] border-[#B8B8B8] text-[#EDEDED] items-center justify-center">
                  <img src="./fb.png" className="w-[16px] h-[28px]" alt="" />
                  <span>Connect with Facebook</span>
                </button>
                <button className="flex w-[60%] rounded-[100px] gap-[20px] border-[2px] border-[#B8B8B8] text-[#EDEDED] items-center justify-center">
                  <img
                    src="./Google.png"
                    className="w-[23px] h-[25px]"
                    alt=""
                  />
                  <span>Continue with Google</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignUp;
