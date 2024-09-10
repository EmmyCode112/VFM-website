import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import faq1 from "/public/FAQImg.png";

import "./Testimonial.css";

const Testimonial = () => {

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true, // You can set your preferred duration
    });
  }, []);

  return (
    <div className="mt-[84px] testimonial text-center text-[white] m-auto w-[90%] relative overflow-hidden">
        <div data-aos="fade-up" className="te-layer z-[100]"></div>
      <h1 className="text-[43px] leading-[48px] font-[600] clashdisplay" data-aos="fade-up" >TESTIMONIAL</h1>
      <p className="text-[29px] leading-[28px] font-[600] text-[#91BE1D] uppercase mt-[25px]" data-aos="fade-up">
        Here’s what fellow gamers <br />
        think about us
      </p>
      <div className="grid-cols grid gap-[24px] mt-[95px] ">
        {/* FIRST COLUMN */}
        <div data-aos="fade-right" className="flex flex-col gap-[24px] text-left">
          {/* FIRST CARD */}
          <div className="faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Amina Samuel</p>
                <small>Team manager, CTL</small>
              </div>
            </div>
            <div className="text">
              <p>
                This gaming site is fantastic! The graphics are top-tier, and
                the gameplay is always smooth. I love how the community is so
                active and friendly. It&opas;s become my go-to place for gaming.
              </p>
            </div>
          </div>
          {/* SECOND CARD */}
          <div className="flex-1 faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Alex P.,</p>
                <small>Avid gamer</small>
              </div>
            </div>
            <div className="text">
              <p>
                I’ve been gaming for years, but I’ve never encountered a
                platform as engaging and innovative as this one. The graphics
                are stunning, the gameplay is smooth, and the community is
                incredibly welcoming. I love the variety of games available and
                the frequent updates that keep everything fresh. The support
                team is also top-notch, always ready to assist with any issues.
                Whether you’re a casual gamer or a hardcore enthusiast, this
                site has something for everyone. Highly recommended!
              </p>
            </div>
          </div>
        </div>
        {/* SECOND COLUMN */}

        <div data-aos="fade-up" className="flex flex-col gap-[24px] text-left">
          {/* FIRST CARD */}
          <div className="faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Amina Samuel</p>
                <small>Team manager, CTL</small>
              </div>
            </div>
            <div className="text">
              <p>
              I’ve been gaming for years, but I’ve never encountered a platform as engaging and innovative as this one. The graphics are stunning, the gameplay is smooth, and the community is incredibly welcoming. I love the variety of games available and the frequent updates that keep everything fresh. The support team is also top-notch, always ready to assist with any issues. Whether you’re a casual gamer or a hardcore enthusiast, this site has something for everyone. Highly recommended!
              </p>
            </div>
          </div>
          <div className="flex-1 faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Taylor M.</p>
                <small>Avid gamer</small>
              </div>
            </div>
            <div className="text">
              <p>
              I’ve tried many gaming sites, but this one stands out. The variety of games is impressive, and there’s always something new to explore. The support team is quick and helpful too!
              </p>
            </div>
          </div>
        </div>
        {/* THIRD COLUMN */}
        <div data-aos="fade-left" className="flex flex-col gap-[24px] text-left">
          {/* FIRST CARD */}
          <div className="faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Jamie L.</p>
                <small>Team manager, CTL</small>
              </div>
            </div>
            <div className="text">
              <p>
              What a great gaming platform! The updates are frequent, ensuring everything stays fresh and exciting. Plus, the gameplay is seamless, which makes for an awesome experience.&qoute;
              </p>
            </div>
          </div>
          <div className="flex-1 faq-card">
            <div className="flex items-center gap-[19px]">
              <div>
                <img
                  src={faq1}
                  className="w-[50px] h-[50px] rounded-[full]"
                  alt=""
                />
              </div>
              <div>
                <p>Alex P.,</p>
                <small>Avid gamer</small>
              </div>
            </div>
            <div className="text">
              <p>
              I’ve been gaming for years, but I’ve never encountered a platform as engaging and innovative as this one. The graphics are stunning, the gameplay is smooth, and the community is incredibly welcoming. I love the variety of games available and the frequent updates that keep everything fresh. The support team is also top-notch, always ready to assist with any issues. Whether you’re a casual gamer or a hardcore enthusiast, this site has something for everyone. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
