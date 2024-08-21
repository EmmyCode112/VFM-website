import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[100vh]">
            <img src="/homepage_image.png" alt="Slide 1" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100vh]">
            <img src="/homepage_image_2.png" alt="Slide 2" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100vh]">
            <img src="/homepage_image_3.png" alt="Slide 3" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[100vh]">
            <img src="/homepage_image_4.png" alt="Slide 4" className="w-full h-full object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="overlay">
        <div className="content">
          <h1 className=" text-[70px] max-sm:text-[45px] leading-[70px]">
            VFM ‘19
          </h1>
          <p className="text-[14px] font-[600] mt-[6px]">
            New Season Begins <br />
            New kits and packs for VVIP Managers
          </p>
          <p className="date text-[13px] mt-[16px]">July 25th, 2024 | 6pm CDT</p>
          <div className=" hero-btn flex gap-3 p-0 mt-[16px]">
            <button className="relative button white-btn bg-[white] text-[#91be1d]">
              <div className="coming-soon top">coming soon</div> PREVIEW PACK
            </button>
            <button className="relative">
              <div className="coming-soon">coming soon</div> BUY NEW PACK
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
