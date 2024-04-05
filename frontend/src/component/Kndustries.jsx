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
    <div className="flex flex-col md:flex-row p-5 md:p-20 mt-20 items-center justify-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="font-abhaya-libre text-2xl md:text-3xl lg:text-4xl font-semibold  p-20 ">
          <p>Custom WhatsApp Solutionsfor Industries</p>
        </div>

        {/* button sextion */}

        <div className="flex flex-wrap ">
          <div className=" ">
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className="   rounded-tl-12  from-black  via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("automotive")}
            >
              automotive
            </Button>
          </div>
          <div className=" ">
            {" "}
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className="  from-black via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("ecommerce")}
            >
              ecommerce
            </Button>
          </div>
          <div className="">
            {" "}
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className=" from-black via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("education")}
            >
              education
            </Button>
          </div>
          <div className="">
            {" "}
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className=" from-black via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("fintech")}
            >
              fintech
            </Button>
          </div>
          <div className="">
            {" "}
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className=" from-black via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("restaurants")}
            >
              restaurants
            </Button>
          </div>
          <div className="">
            {" "}
            <Button
              outline
              gradientDuoTone="purpleToBlue"
              className=" from-black via-emerald-500 to-black bg-gradient-to-l"
              onClick={() => handleButtonClick("retail")}
            >
              retail
            </Button>
          </div>
        </div>
      </div>

      {/* image section */}
      <div className="md:w-1/2">
        {activeDiv === "automotive" && (
          <div>
            <div className="">
              <p className=" font-montserrat ">
                Servii completely transforms the way enterprises engage with
                their customers. Our groundbreaking business solutions, powered
                by the WhatsApp Business API, are custom-designed to address the
                unique requirements of diverse industry sectors.
              </p>
              <img className="  pt-5" src={automotive} alt="" />
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
              <img className="  pt-5" src={ecommerce} alt="" />
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
              <img className="  pt-5" src={education} alt="" />
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
              <img className="  md:pt-5" src={fintech} alt="" />
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
              <img className="  pt-5" src={restaurants} alt="" />
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
              <img className=" pt-5" src={retail} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Industries;
