/* eslint-disable no-unused-vars */
import { useRef } from "react";
import Header from "../component/Header1";
import Fourth from "../component/Fourth.jsx";
import Second from "../component/Second.jsx";
import Formpage from "../component/Formpage.jsx";
import Fifth from "../component/Fifth.jsx";
import Kndustries from "../component/Kndustries.jsx";
import FAQ from "../component/FAQ.jsx";

function Home() {
  const formpageRef = useRef(null);
  const solutionpage = useRef(null);
  const featurepage = useRef(null);
  const industriespage = useRef(null);
  const faqpage = useRef(null);
  const contactpage = useRef(null);

  const scrollToFormPage = () => {
    formpageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scroolltoSolution = () => {
    solutionpage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroolltoFeature = () => {
    featurepage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroolltoIndustries = () => {
    industriespage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroolltoFAQ = () => {
    faqpage.current.scrollIntoView({ behavior: "smooth" });
  };
  const scroolltoContact = () => {
    contactpage.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black">
      <Header
        scrollToFormPage={scrollToFormPage}
        scroolltoIndustries={scroolltoIndustries}
      />
      <Second scrollToFormPage={scrollToFormPage} />
      <Fourth scrollToFormPage={scrollToFormPage} />
      <Fifth scrollToFormPage={scrollToFormPage} />

      <div ref={industriespage}>
        <Kndustries scrollToFormPage={scrollToFormPage} />
      </div>

      {/* Wrap the component you want to scroll to in a div with the ref */}
      <div ref={formpageRef}>
        <Formpage />
      </div>

      <FAQ />
    </div>
  );
}

export default Home;
