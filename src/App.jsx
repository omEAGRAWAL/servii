/* eslint-disable no-unused-vars */
import { useState } from "react";
// import { Button } from "flowbite-react";
import Header from "./component/Header1";
import "./App.css";
import Second from "./component/Second.jsx";
import Firstsection from "./component/Firstsection.jsx";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <Header />
      <Second />
    </div>
  );
}

export default App;
