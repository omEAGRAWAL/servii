/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import contact from "../asset/contacttext.png";
import contactmobile from "../asset/contacttextmobile.png";

function InputField({ label, placeholder, className }) {
  return (
    <div className="flex flex-col  font-abhaya-libre">
      <label className="text-xl font-semibold leading-6 text-neutral-800">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={`px-3 py-2 mt-2 text-sm leading-6 font-montserrat bg-white rounded-lg border border-solid border-neutral-200 text-zinc-600 ${className}`}
      />
    </div>
  );
}

function PhoneInputField() {
  return (
    <div className="flex flex-col mt-6 max-w-full ">
      <label
        htmlFor="phoneNumber"
        className="text-xl font-semibold leading-6 font-abhaya-libre text-neutral-800"
      >
        Contact Number*
      </label>
      <div className="flex gap-2 mt-2 text-sm leading-6 text-zinc-600">
        <div className="px-3 py-2 text-center whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200">
          +91
        </div>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Enter Contact Number"
          className="flex-1 px-3 py-2 font-montserrat bg-white rounded-lg border border-solid border-neutral-200"
        />
      </div>
    </div>
  );
}

function TextAreaField() {
  return (
    <div className=" ">
      <div className="flex flex-col mt-6 max-w-full">
        <label
          htmlFor="message"
          className="text-xl font-abhaya-libre font-semibold leading-6 text-neutral-800"
        >
          How Can We Help You?
        </label>
        <textarea
          id="message"
          placeholder="Write Messages..."
          className="px-3 py-2 mt-2 font-montserrat text-sm leading-6 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-600"
        ></textarea>
      </div>
    </div>
  );
}

function MyComponent() {
  return (
    <div className="flex flex-col md:flex-row p-6 pr-15 ">
      <div className=" md:w-2/5  items-center hidden md:flex justify-center">
        <img src={contact} alt="mmmmmmmmmmmmmm" />
      </div>
      <div>
        <img src={contactmobile} alt="contact mobile" className="md:hidden " />
      </div>
      <div className="flex flex-col md:w-3/5 p-16 justify-center   rounded-3xl bg-zinc-50 max-w-full">
        <form className="flex flex-col max-w-full pr-10">
          <div className="flex gap-5 flex-wrap">
            <InputField label="Your Name*" placeholder="Enter Your Name" />
            <InputField
              label="Company Name*"
              placeholder="Enter Company Name"
            />
          </div>
          <div className="flex flex-col mt-6 max-w-full">
            <InputField
              label="Work Email ID*"
              placeholder="abc@company.com"
              className="whitespace-nowrap"
            />
          </div>
          <PhoneInputField />
          <TextAreaField />
          <button
            type="submit"
            className="justify-center items-center p-4 mt-14 text-lg font-semibold text-white bg-emerald-500 rounded-lg max-w-full focus:outline-none"
          >
            Lets Talk!
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyComponent;
