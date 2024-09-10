import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import stadium from "/public/stadium.png";

const Offers = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  return (
    <div
      className="w-full mb-[84px] h-[445px] max-lg:h-[645px] overflow-hidden mt-[84px] relative text-white"
      data-aos="fade-up"
    >
      <div className="w-full h-[full]">
        <img
          src={stadium}
          className="w-full h-[full] max-lg:h-[645px]"
          alt=""
        />
      </div>
      <div className="layer"></div>
      <div className="layer2"></div>
      <div
        data-aos="fade-right"
        className="absolute max-lg:left-[100px] max-sm:left-[40px]  bottom-[143px] left-[225px]"
      >
        <h1 className="text-[35px] max-sm:text-[25px] leading-[35px] font-[600] uppercase clashdisplay">
          Exclusive offers and <br />{" "}
          <span className="font-[600] text-[#91be1d] text-[21px] leading-[22px]">
            latest news
          </span>
        </h1>
        <div className="wishlist mt-[25px]">
          <button className="subscribe relative">
            <div className="coming-soon">coming soon</div>Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
