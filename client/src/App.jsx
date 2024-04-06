/* eslint-disable no-unused-vars */
import { useRef } from "react";
import Header from "./component/Header1";
import "./App.css";
import Fourth from "./component/Fourth.jsx";
import Second from "./component/Second.jsx";
import Formpage from "./component/Formpage.jsx";
import Fifth from "./component/Fifth.jsx";
import Kndustries from "./component/Kndustries.jsx";
import FAQ from "./component/FAQ.jsx";
import Terms from "./component/Terms.jsx";

function App() {
  const formpageRef = useRef(null);

  const scrollToFormPage = () => {
    formpageRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-white text-black">
      <Header scrollToFormPage={scrollToFormPage} />
      <Second scrollToFormPage={scrollToFormPage} />
      <Fourth scrollToFormPage={scrollToFormPage} />
      <Fifth scrollToFormPage={scrollToFormPage} />
      <Kndustries scrollToFormPage={scrollToFormPage} />

      <div ref={formpageRef}>
        <Formpage />
      </div>

      <Terms />
    </div>
  );
}

export default App;
