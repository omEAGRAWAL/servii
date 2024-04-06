/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { Button } from "flowbite-react";
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
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white text-black">
      <Header />
      <Second />
      <Fourth />
      <Fifth />
      <Kndustries />

      <Formpage />
      {/* <FAQ /> */}
      <Terms />
    </div>
  );
}

export default App;
