/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Card } from "flowbite-react";
import automotive from "../asset/industries/automotive.png";
import ecommerce from "../asset/industries/ecommerce.png";
import education from "../asset/industries/education.png";
import fintech from "../asset/industries/fintech.png";
import restaurants from "../asset/industries/restaurants.png";
import retail from "../asset/industries/retail.png";
import "./Industry.css";
function Industries() {
  const [activeDiv, setActiveDiv] = useState("automotive");

  const handleButtonClick = (divName) => {
    setActiveDiv(divName);
  };

  return (
    <div className="md:pt-20  md:mt-10">
      <div
        className="flex flex-col md:flex-row   md:m-20  m-5 items-center justify-center bg-[#FAFFFA] rounded-3xl"
        id="industries"
      >
        <div className=" w-full md:w-1/2  p-5 md:p-0 flex flex-col justify-center items-center md:m-10 md:mr-20 md:pr-10">
          <div className="md:m-5">
            <label className="text-[#12BF7C] border font-montserrat text-sm bg-white border-gray-300 rounded pl-1 pr-1   ">
              Industries
            </label>

            <div className="font-abhaya-libre text-xl md:text-3xl lg:text-4xl font-semibold mt-10 pr-10 ">
              <p>Custom WhatsApp Solutions for Industries</p>
            </div>
          </div>

          {/* button sextion */}

          <div className="flex flex-wrap justify-center font-abhaya-libre  text-gray-600   font-medium mt-10 md:mt-20   text-sm md:text-2xl">
            <div className=" w-1/3 md:w-1/2  p-2 h-14 md:h-20   ">
              <button
                className={` w-full h-full bg-white hover:text-white 
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "automotive" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("automotive")}
              >
                Automotive
              </button>
            </div>
            <div className=" w-1/3   md:w-1/2  p-2 h-14 md:h-20">
              <button
                className={` w-full h-full bg-white hover:text-white 
               rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                 activeDiv === "ecommerce" &&
                 "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
               } `}
                onClick={() => handleButtonClick("ecommerce")}
              >
                Ecommerce
              </button>
            </div>
            <div className="w-1/3  md:w-1/2 p-2  h-14 md:h-20">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "education" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("education")}
              >
                Education
              </button>
            </div>
            <div className="w-1/3 md:w-1/2 p-2 h-14 md:h-20  ">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  p-1
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "fintech" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("fintech")}
              >
                Fintech
              </button>
            </div>
            <div className="w-1/3   md:w-1/2 p-2 h-14 md:h-20">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "restaurants" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("restaurants")}
              >
                Restaurants
              </button>
            </div>
            <div className="w-1/3 md:w-1/2 p-2 h-14 md:h-20 ">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white 
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "retail" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("retail")}
              >
                Retail
              </button>
            </div>
          </div>
        </div>

        {/* image section */}
        <div className=" w-full md:w-1/2  p-5 md:p-20 md:pr-0 text-xs md:text-sm   md:mr-20">
          {activeDiv === "automotive" && (
            <div
              className={`transition-section ${
                activeDiv === "automotive" ? "active" : ""
              }`}
            >
              <div className=" ">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className="  pt-10" src={automotive} alt="" />
              </div>
            </div>
          )}
          {activeDiv === "ecommerce" && (
            <div
              className={`transition-section ${
                activeDiv === "ecommerce" ? "active" : ""
              }`}
            >
              {" "}
              <div className="">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className="  pt-10" src={ecommerce} alt="" />
              </div>
            </div>
          )}
          {activeDiv === "education" && (
            <div
              className={`transition-section ${
                activeDiv === "education" ? "active" : ""
              }`}
            >
              <div className="">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className="  pt-10" src={education} alt="" />
              </div>
            </div>
          )}
          {activeDiv === "fintech" && (
            <div
              className={`transition-section ${
                activeDiv === "fintech" ? "active" : ""
              }`}
            >
              <div className="">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className="  pt-10" src={fintech} alt="" />
              </div>
            </div>
          )}
          {activeDiv === "restaurants" && (
            <div
              className={`transition-section ${
                activeDiv === "restaurants" ? "active" : ""
              }`}
            >
              <div className="">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className="  pt-10" src={restaurants} alt="" />
              </div>
            </div>
          )}
          {activeDiv === "retail" && (
            <div
              className={`transition-section ${
                activeDiv === "retail" ? "active" : ""
              }`}
            >
              <div className="">
                <p className=" font-montserrat ">
                  Servii completely transforms the way enterprises engage with
                  their customers. Our groundbreaking business solutions,
                  powered by the WhatsApp Business API, are custom-designed to
                  address the unique requirements of diverse industry sectors.
                </p>
                <img className=" pt-10" src={retail} alt="" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Industries;
