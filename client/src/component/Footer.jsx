import { Footer } from "flowbite-react";
import logo from "../asset/servii_logo_footer.svg";
function Footerbars() {
  return (
    <div>
      <Footer className="bg-black text-white w-full " container>
        <div className="  w-full justify-between ">
          <Footer.Brand
            href="#"
            src={logo}
            alt="Flowbite Logo"
          />
          <div className="">
            <Footer.LinkGroup>
              <Footer.Link href="#">About us</Footer.Link>
              <Footer.Link href="#">Our Services</Footer.Link>

              <Footer.Link href="#">FAQs</Footer.Link>
              <Footer.Link href="#">Contact us</Footer.Link>
              <Footer.Link href="#">Privacy & Policy</Footer.Link>
              <Footer.Link href="#">Terms & Condition</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default Footerbars;
