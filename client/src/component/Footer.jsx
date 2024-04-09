import { Footer } from "flowbite-react";
import logo from "../asset/servii_logo.svg";
function Footerbars() {
  return (
    <div>
      <Footer className="bg-black text-white " container>
        <div className="">
          <Footer.Brand href="#" src={logo} alt="Flowbite Logo"
            name="Flowbite" />
        </div>
      </Footer>
    </div>
  );
}

export default Footerbars;
