/* eslint-disable no-unused-vars */
import { Card, Button } from "flowbite-react";
import frame from "../asset/Frame.png";

function Fourth() {
  return (
    <Card className="border-none shadow-none">
      <div className="flex flex-row mt-20 pt-20 items-center">
        <div className=" flex flex-col  w-1/2">
          <div style={{ fontFamily: "Abhaya Libre" }} className=" text-4xl   ">
            <p>Automate your Customer</p>
            <p>Engagement through</p>
          </div>
          <div
            style={{ fontFamily: "Montserrat" }}
            className=" text-xl/24.38px font-medium flex flex-col items-center pt-10 "
          >
            <p>Automate Marketing, Sales</p>
            <p> & Customer Support.</p>
          </div>

          <div className="flex justify-center mt-8">
            <Button color="success">Request a Demo</Button>
          </div>
        </div>
        <div size="l" className="w-1/2 ">
          <Card className="shadow-none border-none ">
            <div className="flex justify-center">
              <img src={frame} alt="Your Image" className=" " />
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}

export default Fourth;
