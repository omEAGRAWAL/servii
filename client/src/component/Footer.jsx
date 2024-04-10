/* eslint-disable no-unused-vars */
import { Footer } from "flowbite-react";
import bharat from "../asset/bharat_footer.svg";
import logo from "../asset/servii_logo_footer.svg";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
// eslint-disable-next-line no-unused-vars
import { FaHeart } from "react-icons/fa";
function Footerbars() {
  return (
    <div className="w-full rounded-none pt-20 mt-10">
      <Footer
        className="bg-black text-white w-full  rounded-none p-7"
        container
      >
        <div className="flex flex-col w-full ">
          <div className="  w-full   flex flex-row">
            <Footer.Brand href="#" src={logo} alt="Flowbite Logo" />
            <div className="flex justify-center items-center w-4/5">
              <div className="w-full">
                <Footer.LinkGroup className="flex justify-center font-montserrat text-white text-md align-left">
                  <Footer.Link href="#">About us </Footer.Link>
                  <Footer.Link href="#">Our Services</Footer.Link>
                  <Footer.Link href="#">FAQs</Footer.Link>
                  <Footer.Link href="#">Contact us</Footer.Link>
                  <Footer.Link href="#">Privacy & Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Condition</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between pt-7">
            <Footer.Copyright
              href="#"
              by="Servii Automotives Pvt. Ltd"
              year={2024}
              className="font-montserrat text-white text-md"
            />

            <Footer.LinkGroup className="flex justify-center font-montserrat text-md">
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
            <div className="flex flex-row items-center ">
              <div className="">
                Made with{" "}
                <FaHeart size={25} color="red" className="inline mr-1" />
              </div>
              <div className=" text-2xl text-[#FF0000]">भारत</div>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Footerbars;
