import { Button } from "flowbite-react";
import "tailwindcss/tailwind.css";
function Second() {
  const handleBookDemo = () => {
    console.log("Book demo button clicked");
  };

  return (
    <div className="flex flex-col items-center self-center px-5 pt-3.5 max-w-full w-[907px]">
      <h1 className="self-stretch text-6xl font-extrabold text-center max-md:max-w-full max-md:text-4xl">
        One smart Conversational AI tool for your business
      </h1>
      <p className="mt-8 max-md:max-w-full">
        Get ready for effortless marketing, sales, and customer conversations
      </p>
      <div className="flex flex-col justify-center mt-16 max-w-full font-semibold text-white w-[210px] max-md:mt-10">
        <Button
          className="flex gap-3 justify-center p-4 bg-emerald-500 rounded-lg"
          onClick={handleBookDemo}
        >
          <span>Book a demo</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc65592e4255638016eeb920c7198119786f74f0db7c8020a87ed14593c5c57e?apiKey=aac4686dee244cdd8921eb52566b335e&"
            className="shrink-0 w-6 aspect-square"
            alt="Book demo icon"
          />
        </Button>
      </div>
    </div>
  );
}

export default Second;
