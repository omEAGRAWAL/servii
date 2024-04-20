/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import frame from "../asset/Frame2157.svg";
import sales from "../asset/sales.svg";
import ecommerce from "../asset/ecommerce.svg";
import customersupport from "../asset/customersupport.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

function Solutions({ scrollToFormPage }) {
  return (
    <div className=" m-5 md:p-20" id="solutions">
      <div className="flex flex-col md:flex-row md:ml-20 p-5 md:p-0 mt-20 pt-20 items-center justify-centre">
        <div className="">
          {/* <label className="text-[#349f50] border font-montserrat w-20 bg-white border-gray-300 rounded   text-sm ">
            Solutions
          </label> */}
          <label className="text-[#12BF7C] border font-montserrat text-sm bg-white border-gray-300 rounded pl-1 pr-1   ">
            Solutions
          </label>
          <div className="font-abhaya-libre text-2xl md:text-3xl mt-16 w-full md:w-3/4">
            <p>Automate your Customer Engagement through</p>
          </div>
          <div className="font-montserrat text-[#6B786C] text-lg md:text-l mt-5 w-3/4 ">
            <p>Automate Marketing, Sales </p>
            <p>& Customer Support.</p>
          </div>

          <Button
            onClick={scrollToFormPage}
            color="success"
            className="bg-[#12BF7C]
              mt-10 w-80 "
            size="xl"
          >
            Request a Demo <MdOutlineArrowOutward className="m-1 ml-2" />
          </Button>
        </div>
        <div className="md:w-1/2 w-full  mt-10">
          <div className="flex flex-col md:flex-row justify-center items-center ">
            <div className="flex flex-col justify-centre items-center md:justify-normal md:items-start   md:w-1/2 md:p-10 p-5 ">
              <img src={frame} alt="Your Image" className=" w-16 md:w-20 " />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md ">
                <p className="text-center md:text-start">
                  Driving High Quality Conversations using WhatsApp Templates in
                  full- funnel conversions
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-centre items-center md:justify-normal md:items-start p-5 md:w-1/2 md:p-10">
              <img src={sales} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md ">
                <p className="text-center md:text-start">
                  Utilizing AI bots to automate conversations streamlines lead
                  capture for sales, tripling your sales team efficiency.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-centre ">
            <div className="flex flex-col justify-centre items-center md:justify-normal md:items-start  md:w-1/2 md:p-10 p-5 ">
              <img src={customersupport} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p className="text-center md:text-start">
                  Integrate Servii-WA API for game-changing 3-way communication
                  customer support.
                </p>
              </div>
            </div>
            <div className="flex flex-col  justify-centre items-center md:justify-normal md:items-start p-5 md:w-1/2 md:p-10">
              <img src={ecommerce} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p className="text-center md:text-start">
                  Elevate your store on WhatsApp, enhancing customer experiences
                  with seamless, on-demand digital services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
