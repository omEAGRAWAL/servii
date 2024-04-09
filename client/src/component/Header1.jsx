/* eslint-disable react/prop-types */
import { Navbar, Button, NavbarBrand } from "flowbite-react";
import logo from "../asset/servii_logo.svg";
import "tailwindcss/tailwind.css";

function Header1({ scrollToFormPage }) {
  return (
    <div className="flex justify-center items-centre ">
      <Navbar className="flex gap-2 md:order-2 m-4 p-2    g-white shadow-xl rounded-2xl fixed top-0 z-50 w-4/5">
        <NavbarBrand className="m-1">
          <img
            src={logo}
            alt="Logo"
            className="bg-white 
    
    "
          />
        </NavbarBrand>
        <div className="flex    gap-2 md:order-2  m-1">
          <Button
            color="success"
            className="bg-[#12bf7c]"
            // href="#formpage"
            onClick={scrollToFormPage}
          >
            Book a demo
          </Button>

          <Navbar.Toggle className="bg-white text-black" />
        </div>
        <Navbar.Collapse className=" bg-white text-black">
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#solutions">Solutions</Navbar.Link>
          <Navbar.Link href="#features">Features</Navbar.Link>
          <Navbar.Link href="#industries">Industries</Navbar.Link>
          <Navbar.Link href="#faq">FAQs</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header1;
