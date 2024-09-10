import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import phone1 from "/public/apple.png";
import phone2 from "/public/android.png";
import cardPhone1 from "/public/phone_01.png";
import cardPhone2 from "/public/phone_02.png";
import cardPhone3 from "/public/phone_03.png";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // You can set your preferred duration
    });
  }, []); // The empty array ensures this runs once after the initial render

  return (
    <section data-aos="fade-up" className="about bg-[#050E18] text-white" id="about">
      <div className="top pt-[158px] pb-[40px] px-[60px] max-md:px-[30px] text-center flex flex-col gap-[10px]">
        <h1 className="text-[32px] font-bold text-white leading-[36px] mb-[16px] max-sm:text-[20px] clashdisplay">
          VFM MOBILE APP, NOW <span className="text-[#91be1d]">AVAILABLE</span>
        </h1>
        <h5 className="text-[12px] leading-[20px]">
          Download the app and govern the first fan-controlled real world sports league - all in the palm of your hand
        </h5>
        <p className="text-[13px] mt-[16px] w-[70%] max-lg:w-[80%] max-sm:w-[100%] max-md:w-[90%] m-auto text-[#cdcdcd]">
          Forget "settling"! VFM is the supernova of football management, a cosmic explosion of strategy and glory waiting to be ignited by YOU! Step up. Become a legend. Craft a football dynasty that'll have future generations bowing at your feet. Join the VFM revolution and unleash the inner mastermind you were always meant to be!
        </p>
      </div>
      <div className="about_btn mb-[44px] max-sm:gap-[15px]">
        <button className="relative"><div className="coming-soon">coming soon</div>
          <img src={phone1}  alt="" /> <small>IOS</small>
        </button>
        <button className="relative"><div className="coming-soon">coming soon</div>
          <img src={phone2} alt="" />
          <small>ANDROID</small>
        </button>
      </div>
      <div className="card-container w-[85%] m-auto " data-aos="fade-up"  >
        <div className="grid-container">
          <div className="card">
            <p className="card-content">
              Grow your $VFM token stash every time your team wins
            </p>
            <div className="line"></div>
            <div>
              <img src={cardPhone1} alt="Phone 01" />
            </div>
          </div>
          <div className="card">
            <p className="card-content">
              Vote on any player(s) before each VFM Global event
            </p>
            <div className="line"></div>
            <div>
              <img src={cardPhone3} alt="Phone 03" />
            </div>
          </div>
          <div className="card">
            <p className="card-content">
              Climb the leaderboards and compete against other managers
            </p>
            <div className="line"></div>
            <div>
              <img src={cardPhone2} alt="Phone 02" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
