import { Button, Card } from "flowbite-react";
import serviqrr from "../asset/serviqr.png";

import first from "../asset/first.png";
import features from "../asset/features.svg";
function Second() {
  return (
    <div>
      <Card className="shadow-none border-none ">
        <div className="flex flex-col items-center justify-center ">
          <div
            style={{
              fontFamily: "Abhaya Libre",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: "75.5px",
              textAlign: "center",
              padding: "100px 0px 0px 0px",
            }}
            className="text-4xl md:text-5xl lg:text-6xl"
          >
            <p>One smart Conversational AI tool</p>
            <p>for your business</p>
          </div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "21.94px",
              textAlign: "center",
              padding: "20px 0px 0px 0px",
            }}
          >
            <p>
              Get ready for effortless marketing, sales, and customer
              conversations
            </p>
          </div>

          {/* Center the button container */}
          <div
            style={{
              padding: "60px 0px 0px 0px",
            }}
          >
            <Button color="success" className="bg-[#12bf7c]" size="xl">
              Book a Demo
            </Button>
          </div>
        </div>
      </Card>
      <Card className="shadow-none border-none pt-20 mt-20 ">
        <div className="flex justify-center">
          <img
            src={first} // Replace with the path to your image file
            alt="Your Image"
            className="w-4/5"
          />
        </div>
      </Card>
      <Card className="shadow-none border-none ">
        <div className="flex justify-center">
          <img
            src={serviqrr}
            alt="Your Image"
            className="w-4/5 pt-20 mt-20 md-20 "
          />
        </div>
      </Card>
      <Card className="shadow-none border-none mt-20 pt-20">
        <div
          className="flex justify-center"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/quotegram-c911f.appspot.com/o/solution1.png?alt=media&token=c90b0e91-e08f-4060-9db6-b457f9c197d9')",
            backgroundSize: "cover",
          }}
        >
          <img
            src="https://framerusercontent.com/images/9jaqMQyANO7SAifdJ2rrbJHeAw.png?scale-down-to=1024" // Replace with the path to your image file
            alt="Your Image"
            className="w-4/5 pt-20 mt-20 md-20 "
          />
        </div>
      </Card>
      <Card className="shadow-none border-none ">
        <div className="flex justify-center">
          <img
            src={features}
            alt="Your Image"
            className="w-4/5 pt-20 mt-20 md-20 "
          />
        </div>
      </Card>
    </div>
  );
}

export default Second;
