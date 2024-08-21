import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer w-[85%] m-auto pt-[95px] flex flex-col gap-[25px]">
      <div className=" flex justify-between items-center w-full">
        <div className="logo">
          <a href="#">
            <img src="/vfm LOGO.png" alt="Logo" className="logo" />
          </a>
        </div>
        <div>
          <img src="./Vector.png" alt="" className="w-[604px] vector" />
        </div>
      </div>
      <div className="bottom flex items-center gap-[70px]">
        <div className="left">
          <div>
            <button className="footer_btn relative"><div className="coming-soon">coming soon</div> DOWNLOAD APP</button>
          </div>
          <div className="flex flex-col gap-[16px] mt-[24px]">
            <p className="text-[#414D63] text-[12px]">
              Karate Combat is the world’s premier full contact striking league,
              blending the excitement of live-action, full-contact Karate with
              immersive CGI environments powered by the Epic Games Unreal gaming
              and virtual production engine.
            </p>
            <div className="flex py-[8px] gap-[43px] social_link">
              <a href="">
                <img src="./fb.png" alt="" />
              </a>
              <a href="">
                <img src="./instagram.png" alt="" />
              </a>
              <a href="">
                <img src="./x.png" alt="" />
              </a>
              <a href="">
                <img src="./discord.png" alt="" />
              </a>
              <a href="">
                <img src="./telegram.png" alt="" />
              </a>
              <a href="">
                <img src="./youtube.png" alt="" />
              </a>
            </div>
            <div className="font-[400] wanna_fight flex items-center gap-[8px] leading-[12px] text-[13px] text-[#91BE1D]">
              <p>
                <span className="font-bold">Wanna fight:</span> fight@VFM.com
              </p>
              <p>
                <span className="font-bold">Inquiries:</span> info@VFM.com
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">EVENTS</a>
            </li>
            <li>
              <a href="">FIGHTERS</a>
            </li>
            <li>
              <a href="">TICKETS</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a href="">HOW TO WATCH</a>
            </li>
            <li>
              <a href="">ABOUT US</a>
            </li>
            <li>
              <a href="">NEWS</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-[12px]">
            <li>
              <a href="">RULES & REGULATIONS</a>
            </li>
            <li>
              <a href="">TERMS & CONDITION</a>
            </li>
            <li>
              <a href="">PRIVACY POLICY</a>
            </li>
            <li>
              <a href="">CONTACT</a>
            </li>
          </ul>
        </div>
        <div className="font-[400] inquires flex items-center gap-[8px] leading-[12px] text-[13px] text-[#91BE1D]">
          <p>
            <span className="font-bold">Wanna fight:</span> fight@VFM.com
          </p>
          <p>
            <span className="font-bold">Inquiries:</span> info@VFM.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
