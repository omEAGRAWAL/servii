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
    <div className="pt-20 mt-10">
      <div
        className="flex flex-col md:flex-row p-5  md:m-20  items-center justify-center bg-[#FAFFFA] rounded-3xl"
        id="industries"
      >
        <div className="md:w-1/2 flex flex-col justify-center items-center m-10 mr-20 pr-10">
          <div className="md:m-5">
            <label className="text-[#12BF7C] border font-montserrat bg-white border-gray-300 rounded   p-1 ">
              Industries
            </label>

            <div className="font-abhaya-libre text-2xl md:text-3xl lg:text-4xl font-semibold mt-20 pr-10 ">
              <p>Custom WhatsApp Solutions for Industries</p>
            </div>
          </div>

          {/* button sextion */}

          <div className="flex flex-wrap justify-center font-abhaya-libre  text-gray-600   font-medium m-5 ">
            <div className=" w-1/3 md:w-1/2  p-2 pl-0    h-20">
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "automotive" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("automotive")}
              >
                Automotive
              </button>
            </div>
            <div className=" w-1/3 h-20  md:w-1/2  p-2">
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
               rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                 activeDiv === "ecommerce" &&
                 "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
               } `}
                onClick={() => handleButtonClick("ecommerce")}
              >
                Ecommerce
              </button>
            </div>
            <div className="w-1/3 h-20 md:w-1/2 p-2 pl-0">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "education" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("education")}
              >
                Education
              </button>
            </div>
            <div className="w-1/3 md:w-1/2 p-2">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "fintech" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("fintech")}
              >
                Fintech
              </button>
            </div>
            <div className="w-1/3  h-20 md:w-1/2 p-2 pl-0">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
              rounded-xl from-black  via-emerald-900 to-black hover:bg-gradient-to-l ${
                activeDiv === "restaurants" &&
                "from-black  via-emerald-900 to-black bg-gradient-to-l text-white"
              } `}
                onClick={() => handleButtonClick("restaurants")}
              >
                Restaurants
              </button>
            </div>
            <div className="w-1/3 md:w-1/2 p-2 ">
              {" "}
              <button
                className={` w-full h-full bg-white hover:text-white  text-2xl
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
        <div className="md:w-1/2 mt-5  mr-20">
          {activeDiv === "automotive" && (
            <div>
              <div className="">
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
            <div>
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
