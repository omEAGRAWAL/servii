/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { Button } from "flowbite-react";
import Header from "./component/Header1";
import "./App.css";
import Fourth from "./component/Fourth.jsx";
import Second from "./component/Second.jsx";
import Third from "./component/Third.jsx";
import Formpage from "./component/Formpage.jsx";
import Firstsection from "./component/Firstsection.jsx";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white text-black">
      <Header />
      <Second />
      <Fourth />
      <Formpage />
    </div>
  );
}

export default App;
