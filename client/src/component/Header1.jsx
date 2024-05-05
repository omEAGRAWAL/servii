import { Navbar, Button, NavbarBrand } from "flowbite-react";
import logo from "../asset/servii_logo.svg";

import { useEffect, useState } from "react";
function Header1() {
  const [location, setLocation] = useState(window.location);

  useEffect(() => {
    const locat = window.location.hash;
    console.log(locat);
    setLocation(locat);
  }, []);
  const isActiveLink = (href) => {
    return location === href;
  };
  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
        block: "start", // Align the top of the target element at the top of the viewport
        inline: "start",
      });
    } else {
      console.error("Target element not found:", targetId);
    }
  };

  return (
    <div className="flex justify-center items-centre ">
      <Navbar className="flex gap-2 md:order-2 m-4 p-2 g-white shadow-xl rounded-2xl fixed top-0 z-50 w-4/5">
        <NavbarBrand className="m-1">
          <img href="/" src={logo} alt="Logo" className="bg-white" />
        </NavbarBrand>
        <div className="flex gap-2 md:order-2  m-1">
          <Button
            color="success"
            className="bg-[#12bf7c]"
            href="https://app1.servii.in/login"
          >
            Login/Sign Up
          </Button>
          <Navbar.Toggle className="bg-white text-black" />
        </div>
        <Navbar.Collapse className="bg-white text-black">
          <Navbar.Link onClick={() => smoothScroll("homes")}>Home</Navbar.Link>
          <Navbar.Link
            onClick={() => smoothScroll("solutions")}
            className={isActiveLink("#solution") ? "text-red-800" : ""}
          >
            Solutions
          </Navbar.Link>
          <Navbar.Link
            // href="/#featur"
            onClick={() => smoothScroll("features")}
            className={isActiveLink("#features") ? "text-red-800" : ""}
          >
            Features
          </Navbar.Link>
          <Navbar.Link
            onClick={() => {
              smoothScroll("industries");
              console.log(location.pathname);
            }}
          >
            Industries
          </Navbar.Link>
          <Navbar.Link onClick={() => smoothScroll("faqs")}>FAQs</Navbar.Link>
          <Navbar.Link href="/" onClick={() => smoothScroll("contact")}>
            Contact us
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header1;
