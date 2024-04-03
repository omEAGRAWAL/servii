/* eslint-disable no-unused-vars */
import { Card, Button } from "flowbite-react";

function Fourth() {
  return (
    <Card>
      <div className="flex flex-row  ">
        <div className=" flex flex-col  w-1/2">
          <div
            style={{ fontFamily: "Abhaya Libre" }}
            className=" text-4xl flex flex-col items-center  "
          >
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

          <Button
            color="success"
            className="  mt-8  justify-center "
          >
            Request a Demo
          </Button>
        </div>
        <div size="l" className="w-1/2 ">
          eunfnehbh
        </div>
      </div>
    </Card>
  );
}

export default Fourth;
