/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "flowbite-react";
import serviqrr from "../asset/serviqr.png";
import serviqrmobile from "../asset/serviqrmobile.png";
import first from "../asset/first.png";
import what from "../asset/whatss.png";
import what_right from "../asset/whatsssss.png";
//add icon for arrow rignt tilted upward react icons

import { FaArrowRight } from "react-icons/fa";
function Second({ scrollToFormPage }) {
  return (
    <div className="bg-white text-black bg-no-repeat pt-20 mt-20 ">
      <div
        className="absolute bg-cover hidden md:block "
        style={{
          backgroundImage: `url('${what}')`,
          width: "658px", // Adjust width as needed
          height: "658px", // Adjust height as needed
          top: "50px", // Adjust position as needed
          left: "-260px",
          opacity: "0.06",
        }}
      ></div>

      <div
        className="bg-no-repeat absolute  "
        style={{
          backgroundImage: `url('${what_right}')`,

          // Adjust height as needed
          width: "400px", // Adjust width as needed
          height: "400px", // Adjust height as needed
          backgroundPosition: "right",
          top: "100px",
          right: "0px",
          // Adjust position as needed

          opacity: "0.06",
        }}
      ></div>

      <div
        className="flex flex-col items-center bg-no-repeat justify-center
      "
      >
        <div className="font-abhaya-libre text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-center pt-20 md:w-3/5">
          <p>One smart Conversational AI tool for your business</p>
        </div>
        <div className="font-montserrat text-base text-m md:text-lg lg:text-xl font-normal leading-normal text-center pt-10">
          <p>
            Get ready for effortless marketing, sales, and customer
            conversations
          </p>
        </div>

        {/* Center the button container */}
        <div className="pt-12">
          <Button
            color="success"
            className="bg-[#12bf7c]"
            size="xl"
            onClick={scrollToFormPage}
          >
            Book a Demo
            <FaArrowRight className="transform rotate-270 m-1 ml-2" />
          </Button>
        </div>
      </div>

      {/* first part of the web */}
      <div className="flex justify-center mt-10 md:mt-20 ">
        <img
          src="https://framerusercontent.com/images/D6CTA1pnxhaC0a4Nhx7rUtxz4.png" // Replace with the path to your image file
          alt="Your Image"
          className="md:w-3/4  "
        />
      </div>

      {/* second image */}
      <div className="flex justify-center pt-10  ">
        <img
          src={serviqrr}
          alt="Your Image"
          className=" pt-20 mt-20 md-20 hidden md:block"
        />
      </div>

      <div>
        <img
          src={serviqrmobile}
          alt=" servi qr mobile"
          className="block md:hidden w-full p-3"
        />
      </div>
      {/* third part of the web */}
    </div>
  );
}

export default Second;
