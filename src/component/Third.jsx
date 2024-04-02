import { Card } from "flowbite-react";

const MyComponent = () => {
  return (
    <Card
      className="bg-gradient-to-r from-gray-900 via-green-600 to-gray-900"
      style={{
        backgroundImage:
          "linear-gradient(90deg, #181D1D 16.84%, #1E4436 50.78%, #181D1D 81.94%)",
      }}
    >
      <div className="flex flex-wrap justify-between md:flex-nowrap text-white">
        <div className="w-full md:w-48 flex flex-col items-center">
          <h1 className="font-montserrat text-7xl md:text-6xl font-medium mb-4">
            85%
          </h1>
          <p className="text-center">Reduction in human</p>
          <p className="text-center">agent requirement</p>
        </div>
        <div className="w-full md:w-48 flex flex-col items-center">
          <h1 className="font-montserrat text-6xl md:text-4xl font-medium mb-4">
            90%
          </h1>
          <p className="text-center">Increase in customer</p>
          <p className="text-center">engagement 24x7</p>
        </div>
        <div className="w-full md:w-48 flex flex-col items-center">
          <h1 className="font-montserrat text-6xl md:text-4xl font-medium mb-4">
            5X
          </h1>
          <p className="text-center">Advanced automated</p>
          <p className="text-center">lead verification & qualification</p>
        </div>
        <div className="w-full md:w-48 flex flex-col items-center">
          <h1 className="font-montserrat text-6xl md:text-4xl font-medium mb-4">
            300%
          </h1>
          <p className="text-center">Advance in unified</p>
          <p className="text-center">customer digital experience</p>
        </div>
      </div>
    </Card>
  );
};

export default MyComponent;
