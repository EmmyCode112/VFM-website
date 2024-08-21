import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className=" m-auto mt-[80px] py-[30px] contact ">
      <h1 className="clashdisplay text-[43px] mb-[20px] uppercase font-bold text-center leading-[43px]">
        Contact Us
      </h1>
      <form className="flex flex-col gap-[35px] text-center">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea
          className="m-auto bg-transparent border-b-[#b8b8b8] border-b-[2px] outline-none py-[5px] pb-[30px] text-[#cdcdcd] w-[60%]"
          placeholder="message..."
          style={{ resize: "none", overflow: "hidden" }}
          rows={1}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        />
        <button className="w-[40%] btn max-sm:w-[80%]" type="submit">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
