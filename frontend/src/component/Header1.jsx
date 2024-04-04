import { Navbar, Button, NavbarBrand } from "flowbite-react";
import logo from "../asset/servii_logo.svg";
import "tailwindcss/tailwind.css";

function Header1() {
  return (
    <Navbar className=" flex gap-2 md:order-2 ">
      <NavbarBrand>
        <img
          src={logo}
          alt="Logo"
          className="bg-white 
          
          "
        />
      </NavbarBrand>
      <div className="flex   gap-2 md:order-2  ">
        <Button color="success" className="bg-[#12bf7c]">
          Book a demo
        </Button>

        <Navbar.Toggle />
        
       
      </div>
      <Navbar.Collapse>
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
