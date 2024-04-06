/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Card } from "flowbite-react";
import automotive from "../asset/industries/automotive.png";
import ecommerce from "../asset/industries/ecommerce.png";
import education from "../asset/industries/education.png";
import fintech from "../asset/industries/fintech.png";
import restaurants from "../asset/industries/restaurants.png";
import retail from "../asset/industries/retail.png";
function Industries() {
  const [activeDiv, setActiveDiv] = useState("automotive");

  const handleButtonClick = (divName) => {
    setActiveDiv(divName);
  };

  return (
    <div className="flex flex-col md:flex-row p-5 md:m-20 mt-20 items-center justify-center bg-[#FAFFFA]">
      <div className="md:w-1/2 flex flex-col justify-center items-center">
        <div>
          <label className="text-[#12BF7C] border font-montserrat bg-white border-gray-300 rounded m-5 md:m-20 p-1 ">
            Industries
          </label>

          <div className="font-abhaya-libre text-2xl md:text-3xl lg:text-4xl font-semibold p-5 md:p-20 ">
            <p>Custom WhatsApp Solutionsfor Industries</p>
          </div>
        </div>

        {/* button sextion */}

        <div className="flex flex-wrap justify-center font-abhaya-libre  text-gray-800   font-medium ">
          <div className=" w-1/3 md:w-1/2  p-2    h-20">
            <button
              className=" w-full h-full bg-white  text-2xl rounded-xl  hover:text-white   from-black  via-emerald-500 to-black hover:bg-gradient-to-l"
              onClick={() => handleButtonClick("automotive")}
            >
              Automotive
            </button>
          </div>
          <div className=" w-1/3 h-20  md:w-1/2  p-2">
            <button
              className=" w-full h-full bg-white text-black-500 text-2xl rounded-xl from-black  via-emerald-500 to-black hover:bg-gradient-to-l  "
              onClick={() => handleButtonClick("ecommerce")}
            >
              Ecommerce
            </button>
          </div>
          <div className="w-1/3 h-20 md:w-1/2 p-2">
            {" "}
            <button
              className=" w-full h-full bg-white text-black-500 text-2xl rounded-xl from-black  via-emerald-500 to-black hover:bg-gradient-to-l hover:text-white "
              onClick={() => handleButtonClick("education")}
            >
              Education
            </button>
          </div>
          <div className="w-1/3 md:w-1/2 p-2">
            {" "}
            <button
              className=" w-full h-full bg-white text-black-500 text-2xl rounded-xl from-black  via-emerald-500 to-black hover:bg-gradient-to-l hover:text-white "
              onClick={() => handleButtonClick("fintech")}
            >
              Fintech
            </button>
          </div>
          <div className="w-1/3  h-20 md:w-1/2 p-2">
            {" "}
            <button
              className=" w-full h-full bg-white text-black-500 text-2xl rounded-xl from-black  via-emerald-500 to-black hover:bg-gradient-to-l hover:text-white "
              onClick={() => handleButtonClick("restaurants")}
            >
              Restaurants
            </button>
          </div>
          <div className="w-1/3 md:w-1/2 p-2">
            {" "}
            <button
              className=" w-full h-full bg-white text-black-500 text-2xl rounded-xl from-black  via-emerald-500 to-black hover:bg-gradient-to-l hover:text-white "
              onClick={() => handleButtonClick("retail")}
            >
              Retail
            </button>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="md:w-1/2 mt-5  md:p-10 md:m-10">
        {activeDiv === "automotive" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-10" src={automotive} alt="" />
            </div>
          </div>
        )}
        {activeDiv === "ecommerce" && (
          <div>
            {" "}
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-10" src={ecommerce} alt="" />
            </div>
          </div>
        )}
        {activeDiv === "education" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-10" src={education} alt="" />
            </div>
          </div>
        )}
        {activeDiv === "fintech" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-10" src={fintech} alt="" />
            </div>
          </div>
        )}
        {activeDiv === "restaurants" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-10" src={restaurants} alt="" />
            </div>
          </div>
        )}
        {activeDiv === "retail" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className=" pt-10" src={retail} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Industries;
