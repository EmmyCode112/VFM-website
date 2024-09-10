import React, { useEffect } from "react";
import "./Blog.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Stadium_img from "/public/wishlist-stadium.png"
import link1 from "/public/Link_01.png"
import link2 from "/public/Link_02.png"
import link3 from "/public/Link_03.png"

const Blog = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <section id="blog" className="pt-[184px] text-white">
      <div className="custom-container flex flex-col gap-[45px] bg-[#050E18] overflow-hidden animate__animated" data-aos="zoom-in">
        <div className="relative blog-image-container animate__animated">
          <div className="overlay">
            <div className="absolute content-wrapper" data-aos="fade-right">
              <h2 className="text-[36px] font-[500] leading-[36px] mb-[10px] max-sm:text-[20px] clashdisplay">
                Final Match Calendar <br /> of VFM Events ‘19
              </h2>
              <h6 className="text-[#91BE1D] leading-[16px] font-[400] text-[12px]">
                World Takeover
              </h6>
              <div className="wishlist mt-[14px]">
                <button className="custom-button">READ MORE</button>
              </div>
            </div>
          </div>
          <img
            src={Stadium_img}
            className="blog-image"
            alt="Stadium"
          />
        </div>
        <div className="grid grid-cols-1 card-wrapper sm:grid-cols-2 md:grid-cols-3 gap-[24px] text-left pb-[15px]" data-aos="fade-up">
          <div className="card_wishlist">
            <img src={link1} alt="Link 1" className="rounded-[5px]" />
            <div className="flex flex-col mt-[27px] gap-[3px]">
              <p className="text-[18px] font-[700] leading-normal">KC 46</p>
              <small className="leading-normal font-[600] text-[14px]">
                Consensus 2024
              </small>
            </div>
          </div>
          <div className="card_wishlist">
            <img src={link2} alt="Link 2" className="rounded-[5px]" />
            <div className="flex flex-col mt-[27px] gap-[3px]">
              <p className="text-[18px] font-[700] leading-normal">
                KC 45 in Dubai
              </p>
              <small className="leading-normal font-[600] text-[14px]">
                Consensus 2024
              </small>
            </div>
          </div>
          <div className="card_wishlist">
            <img src={link3} alt="Link 3" className="rounded-[5px]" />
            <div className="flex flex-col mt-[27px] gap-[3px]">
              <p className="text-[18px] font-[700] leading-normal">
                The Beautiful Playa del Carmen
              </p>
              <small className="leading-normal font-[600] text-[14px]">
                Consensus 2024
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
