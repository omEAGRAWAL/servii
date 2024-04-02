import { Button, Card } from "flowbite-react";
function Second() {
  return (
    <>
      <Card>
        <div className="flex flex-col items-center justify-center">
          <div
            style={{
              fontFamily: "Abhaya Libre",
              fontSize: "64px",
              fontWeight: 800,
              lineHeight: "75.5px",
              textAlign: "center",
              padding: "100px 0px 0px 0px",
            }}
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
            <Button color="success" size="xl">
              Book a Demo
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <img
          src="https://framerusercontent.com/images/D6CTA1pnxhaC0a4Nhx7rUtxz4.png" // Replace with the path to your image file
          alt="Your Image"
          className="w-full"
        />
      </Card>
    </>
  );
}

export default Second;
