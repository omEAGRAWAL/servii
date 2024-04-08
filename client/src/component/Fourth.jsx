/* eslint-disable react/prop-types */
import { Button } from "flowbite-react";
import frame from "../asset/Frame2157.svg";
import sales from "../asset/sales.svg";
import ecommerce from "../asset/ecommerce.svg";
import customersupport from "../asset/customersupport.svg";
import { MdOutlineArrowOutward } from "react-icons/md";

function Fourth({ scrollToFormPage }) {
  return (
    <div className="p-20 m-0" id="solutions">
      <div className="flex flex-col md:flex-row mt-20 pt-20 items-center justify-centre">
        <div className="md:m-5 ">
          {/* <label className="text-[#349f50] border font-montserrat w-20 bg-white border-gray-300 rounded   text-sm ">
            Solutions
          </label> */}
          <label className="text-[#12BF7C] border font-montserrat bg-white border-gray-300 rounded   p-1 ">
            Solutions
          </label>
          <div className="font-abhaya-libre text-3xl md:text-4xl mt-16 w-3/4">
            <p>Automate your Customer Engagement through</p>
          </div>
          <div className="font-montserrat text-[#6B786C] text-l md:text-l mt-5 w-3/4 ">
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
            <div className="flex flex-col   w-1/2 p-10 ">
              <img src={frame} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Driving High Quality</p>
                <p>Conversations using</p>
                <p>WhatsApp Templates in</p>
                <p>full- funnel conversions</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2 p-10">
              <img src={sales} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md ">
                <p>Utilizing AI bots to </p>
                <p>automate conversations</p>
                <p>streamlines lead capture fo</p>
                <p>sales, tripling your sales </p>
                <p>team efficiency.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-centre ">
            <div className="flex flex-col   w-1/2 p-10 ">
              <img src={customersupport} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Integrate Servii-WA API for</p>
                <p>game-changing 3-way </p>
                <p>communication customer </p>
                <p>support.</p>
              </div>
            </div>
            <div className="flex flex-col w-1/2 p-10">
              <img src={ecommerce} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Elevate your store on</p>
                <p>WhatsApp, enhancing</p>
                <p>customer experiences with</p>
                <p>seamless, on-demand</p>
                <p>digital services.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourth;
