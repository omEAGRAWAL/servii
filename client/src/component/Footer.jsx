/* eslint-disable no-unused-vars */
import { Footer } from "flowbite-react";
import bharat from "../asset/bharat_footer.svg";
import logo from "../asset/servii_logo_footer.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import logo_mobile from "../asset/servi_logo_mobile_footer.svg";
// eslint-disable-next-line no-unused-vars
import { FaHeart } from "react-icons/fa";
function Footerbars() {
  return (
    <div className="w-full rounded-none pt-20 mt-10">
      <Footer
        className="bg-black  text-white w-full  rounded-none p-7"
        container
      >
        <div className="flex flex-col w-full ">
          <div className="  w-full   flex flex-col md:flex-row  ">
            <div className="order-2 mt-9 md:mt-0  ">
              <Footer.Brand
                href="#"
                className="h-3 md:h-full md:w-full w-20"
                src={logo_mobile}
                alt="Flowbite Logo"
              />
            </div>

            <div className="flex md:justify-center md:items-center w-full md:w-4/5 md:order-2">
              <div className="w-full">
                <Footer.LinkGroup className="flex md:justify-center  flex-row font-montserrat text-white  text-sm md:text-md gap-1">
                  <Footer.Link href="#" className="hidden md:block">
                    About us{" "}
                  </Footer.Link>
                  <Footer.Link href="#" className="hidden md:block">
                    Our Services
                  </Footer.Link>
                  <Footer.Link href="/#faqs">FAQs</Footer.Link>
                  <Footer.Link href="#" className="hidden md:block">
                    Contact us
                  </Footer.Link>
                  <Footer.Link href="/privacy">Privacy & Policy</Footer.Link>
                  <Footer.Link href="/tc">Terms & Condition</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between md:pt-7 pt-0">
            <Footer.Copyright
              href="#"
              by="Servii Automotives Pvt. Ltd"
              year={2024}
              className="font-montserrat text-white text-md hidden md:block"
            />
            <Footer.LinkGroup className="flex justify-center order-2 font-montserrat text-md">
              <Footer.Link href="#" className="">
                <AiOutlineInstagram size={25} className="" />
              </Footer.Link>
              <Footer.Link href="#">
                <AiOutlineFacebook size={25} />
              </Footer.Link>
              <Footer.Link href="#">
                <AiOutlineLinkedin size={25} />
              </Footer.Link>
            </Footer.LinkGroup>

            {/* <img src={bharat} alt="bharat" className="w-40" /> */}
            <div className="flex flex-row items-center mt-0 pt-0 md:order-2 ">
              <div className=" text-md md:text-2xl">
                Made with{" "}
                <FaHeart size={25} color="red" className="inline mr-1" />
              </div>
              <div className="text-md  md:text-2xl text-[#FF0000]">भारत</div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Footerbars;
