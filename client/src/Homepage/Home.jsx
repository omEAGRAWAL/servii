import { useRef } from "react";
// import Header from "../component/Header1";
import Fourth from "../component/Fourth.jsx";
import Second from "../component/Second.jsx";
import Formpage from "../component/Formpage.jsx";
import Fifth from "../component/Fifth.jsx";
import Kndustries from "../component/Kndustries.jsx";
import FAQ from "../component/FAQ.jsx";

function Home() {
  const formpageRef = useRef(null);

  const scrollToFormPage = () => {
    formpageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black">
      {/* <Header scrollToFormPage={scrollToFormPage} /> */}
      <Second scrollToFormPage={scrollToFormPage} />
      <Fourth scrollToFormPage={scrollToFormPage} />
      <Fifth scrollToFormPage={scrollToFormPage} />
      <Kndustries scrollToFormPage={scrollToFormPage} />

      {/* Wrap the component you want to scroll to in a div with the ref */}
      <div ref={formpageRef}>
        <Formpage />
      </div>

      <FAQ />
    </div>
  );
}

export default Home;
