import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Wishlist = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, 
    });
  }, []);
  return (
    <section id="wishlist" className="  text-center text-white overflow-hidden">
      <div className="con relative pt-[158px]">
        <h1 className="text-[32px] leading-[48px] font-[600] uppercase mb-[14px] max-sm:text-[20px] clashdisplay" data-aos="fade-right">
          Best of all? You can’t lose <br />
          EVERYTHING.
        </h1>
        <h3 className="text-[27px] font-[600] text-[#91be1d] leading-[27px] mb-[9px] clashdisplay" data-aos="fade-right">
          That’s Up Only Gaming
        </h3>
        <small className="font-[400] text-[12px] leading-[16px] text-[#5E5967]">
          *$KARATE price will vary <br />
          2018, Sensei Ltd, a Seychelles international business company with
          registration number 233778.
        </small>
        <div className="wishlist mt-[20px]" data-aos="fade-left">
          <Link to={'./sign_up'}><button>Join wishlist</button></Link>
        </div>

        <div className="absolute design bottom-0 w-auto right-0">
          <img src="./left-digi.png" className="max-lg:w-[200px] max-md:hidden" alt="" />
        </div>
        <div className="absolute design bottom-0 w-auto left-0">
          <img src="./right-digi.png" className="max-lg:w-[200px] max-md:hidden" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
