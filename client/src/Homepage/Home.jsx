/* eslint-disable no-unused-vars */
import { useRef } from "react";
import Header from "../component/Header1";
import Solution from "../component/Solutions.jsx";
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

  return (
    <div className="bg-white text-black">
      <Header scrollToFormPage={scrollToFormPage} />
      <Second scrollToFormPage={scrollToFormPage} />
      <Solution scrollToFormPage={scrollToFormPage} />
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
