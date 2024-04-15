/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import contact from "../asset/contacttext.png";
import contactmobile from "../asset/contacttextmobile.png";

function InputField({ label, placeholder, name, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col w-full font-abhaya-libre" id="formpage">
      <label className="text-xl font-semibold leading-6 text-neutral-700">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="px-3 py-2 mt-2 text-l  leading-9  bg-white rounded-lg border border-solid border-neutral-200 text-zinc-600 font-montserrat"
      />
    </div>
  );
}

function PhoneInputField({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col mt-6 max-w-full ">
      <label
        htmlFor="phoneNumber"
        className="text-xl font-semibold leading-9 font-abhaya-libre text-neutral-800"
      >
        Contact Number*
      </label>
      <div className="flex gap-2 mt-2  leading-9 text-zinc-600">
        <div className="px-3 py-2 text-center whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200">
          +91
        </div>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Enter Contact Number"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="flex-1 px-3 test-lg py-2 font-montserrat bg-white rounded-lg border border-solid border-neutral-200"
        />
      </div>
    </div>
  );
}

function TextAreaField({ formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
          name="message"
          placeholder="Write Messages..."
          value={formData.message}
          onChange={handleChange}
          className="px-3 py-2 text-lg mt-2 font-montserrat  leading-9 bg-white rounded-lg border border-solid border-neutral-200 text-zinc-600"
        ></textarea>
      </div>
    </div>
  );
}
function MyComponent() {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert formData object to JSON string
    const jsonData = JSON.stringify(formData);
    // Log JSON data to the console
    console.log(jsonData);
  };

  const handleSubmitbutton = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        // dispatch(signInFailure(data.message));
      } else {
        console.log(data);
        // navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:p-20 p-5 ">
      <div className=" items-center hidden md:flex justify-center">
        <img src={contact} alt="mmmmmmmmmmmmmm" />
      </div>
      <div>
        <img src={contactmobile} alt="contact mobile" className="md:hidden" />
      </div>
      <div className="flex flex-col md:w-3/5 md:ml-10 p-5 mt-5  md:p-16  justify-center rounded-3xl bg-zinc-50 max-w-full">
        <form className="flex flex-col max-w-full pr-5" onSubmit={handleSubmit}>
          <div className="flex  gap-5 flex-col md:flex-row   ">
            <InputField
              label="Your Name*"
              placeholder="Enter Your Name"
              name="name"
              formData={formData}
              setFormData={setFormData}
            />
            <InputField
              label="Company Name*"
              placeholder="Enter Company Name"
              name="companyName"
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div className="flex flex-col mt-6 max-w-full">
            <InputField
              label="Work Email ID*"
              placeholder="abc@company.com"
              name="email"
              formData={formData}
              setFormData={setFormData}
              className="whitespace-nowrap"
            />
          </div>
          <PhoneInputField formData={formData} setFormData={setFormData} />
          <TextAreaField formData={formData} setFormData={setFormData} />
          <button
            type="submit"
            onClick={handleSubmitbutton}
            className="justify-center items-center p-4  mt-10 text-lg font-semibold text-white bg-emerald-500 rounded-lg max-w-full focus:outline-none"
          >
            Lets Talk!
          </button>
        </form>
      </div>
    </div>
  );
}

export default MyComponent;
