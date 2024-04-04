import { Card, Button } from "flowbite-react";
import frame from "../asset/Frame2157.svg";

function Fourth() {
  return (
    <Card className="border-none shadow-none">
      <div className="flex flex-row mt-20 pt-20 items-center justify-centre">
        <div className="flex flex-col w-1/2 justify-center items-center">
          <div className="font-abhaya-libre  text-4xl  w-3/4">
            <p>Automate your Customer Engagement through</p>
          </div>
          <div className="font-montserrat text-xl mt-10 w-3/4 ">
            <p>Automate Marketing, Sales </p>
            <p>& Customer Support.</p>
          </div>

          <div className="flex w-3/4 mt-10">
            <Button color="success">Request a Demo</Button>
          </div>
        </div>
        <div className="w-1/2 ">
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col w-1/2 ">
              <img src={frame} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Driving High Quality</p>
                <p>Conversations using</p>
                <p>WhatsApp Templates in</p>
                <p>full- funnel conversions</p>
              </div>
            </div>
            <div className="flex flex-col ">
              <img src={frame} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Driving High Quality</p>
                <p>Conversations using</p>
                <p>WhatsApp Templates in</p>
                <p>full- funnel conversions</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-8">
            <div className="flex flex-col w-1/2 ">
              <img src={frame} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Driving High Quality</p>
                <p>Conversations using</p>
                <p>WhatsApp Templates in</p>
                <p>full- funnel conversions</p>
              </div>
            </div>
            <div className="flex flex-col">
              <img src={frame} alt="Your Image" className="w-20" />
              <p className="font-abhaya-libre text-xl/9">Marketing</p>

              <div className="font-montserrat text-gray-700 text-shadow-md">
                <p>Driving High Quality</p>
                <p>Conversations using</p>
                <p>WhatsApp Templates in</p>
                <p>full- funnel conversions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Fourth;
