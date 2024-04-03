import { Navbar, Button, NavbarBrand } from "flowbite-react";
import logo from "../asset/servii_logo.svg";
import "tailwindcss/tailwind.css";

function Header1() {
  return (
    <>
      <Navbar className="p-4 bg-white ">
        <NavbarBrand>
          <img
            src={logo}
            alt="Logo"
            className="bg-white padding-0
          
          "
          />
        </NavbarBrand>
        <Button color="success" pill>
          Book a demo
        </Button>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Navbar.Link href="#">Home</Navbar.Link>
          <Navbar.Link href="#">Solutions</Navbar.Link>
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Industries</Navbar.Link>
          <Navbar.Link href="#">FAQs</Navbar.Link>
          <Navbar.Link href="#">Contact us</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <hr style={{ margin: "0" }} />
    </>
  );
}

export default Header1;
