/* eslint-disable no-unused-vars */
// import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "flowbite-react";
import frame from "../asset/featuresnew.png";
import framemobile from "../asset/Framemobile.png";
import solution from "../asset/solution1desk.png";
import solutionmobile from "../asset/solution1mobile.png";
import integration from "../asset/integrationdesk.png";
import integrationmobile from "../asset/integrationmobile.png";
function Fifth({ scrollToFormPage }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="pt-10 mt-10">
        <div>
          <img src={solution} alt="solution  " className="hidden md:flex p-5" />
        </div>
        <div>
          <img
            src={solutionmobile}
            alt="solution mobile  "
            className="md:hidden p-5"
          />
        </div>
      </div>

      <div className=" flex justify-center items-center pr-15 pt-20 mt-20">
        <img src={frame} alt=" form" className=" hidden md:block " />
      </div>
      <div className="  md:hidden mt-10 pt-5 ">
        <img src={framemobile} alt="" className="p-5" />
      </div>
      <Button className="bg-[#12BF7C] " size="xl" onClick={scrollToFormPage}>
        Request a Demo <MdOutlineArrowOutward className="m-1 ml-2" />
      </Button>

      <div className=" mt-10">
        <div className="">
          <img
            src={integration}
            alt="integration with platforms"
            className="hidden md:flex pt-10"
          />
        </div>

        <div className="">
          <img
            src={integrationmobile}
            alt="integration mobile"
            className="md:hidden p-5"
          />
        </div>
      </div>
    </div>
  );
}

export default Fifth;
