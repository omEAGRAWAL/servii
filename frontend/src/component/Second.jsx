import { Button, Card } from "flowbite-react";
import serviqrr from "../asset/serviqr.png";
import serviqrmobile from "../asset/serviqrmobile.png";
import first from "../asset/first.png";
//add icon for arrow rignt tilted upward react icons

import { FaArrowRight } from "react-icons/fa";
function Second() {
  return (
    <div className="bg-white text-black">
      <Card className="shadow-none border-none">
        <div className="flex flex-col items-center justify-center">
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
            <Button color="success" className="bg-[#12bf7c]" size="xl">
              Book a Demo
              <FaArrowRight className="transform rotate-270 ml-2" />
            </Button>
          </div>
        </div>
      </Card>

      {/* first part of the web */}
      <div className="flex justify-center mt-10 md:mt-20">
        <img
          src={first} // Replace with the path to your image file
          alt="Your Image"
          className="w-full md:w-3/5 "
        />
      </div>

      {/* second image */}
      <div className="flex justify-center pt-10  ">
        <img
          src={serviqrr}
          alt="Your Image"
          className="w-4/5 pt-20 mt-20 md-20 hidden md:block"
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
