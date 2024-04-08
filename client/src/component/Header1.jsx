/* eslint-disable react/prop-types */
import { Navbar, Button, NavbarBrand } from "flowbite-react";
import logo from "../asset/servii_logo.svg";
import "tailwindcss/tailwind.css";

function Header1({ scrollToFormPage }) {
  return (
    <Navbar className="flex  gap-2 md:order-2   g-white shadow-sm fixed top-0 w-full z-50">
      <NavbarBrand className="">
        <img
          src={logo}
          alt="Logo"
          className="bg-white 
          
          "
        />
      </NavbarBrand>
      <div className="flex  bg-white text-black  gap-2 md:order-2  ">
        <Button
          color="success"
          className="bg-[#12bf7c]"
          onClick={scrollToFormPage}
        >
          Book a demo
        </Button>

        <Navbar.Toggle className="bg-white text-black" />
      </div>
      <Navbar.Collapse className=" bg-white text-black">
        <Navbar.Link href="#">Home</Navbar.Link>
        <Navbar.Link href="#">Solutions</Navbar.Link>
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link href="#">Industries</Navbar.Link>
        <Navbar.Link href="#">FAQs</Navbar.Link>
        <Navbar.Link href="#">Contact us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header1;
