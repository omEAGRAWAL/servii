import { useState } from "react";
// import { Button } from "flowbite-react";
import Header from "./component/Header1";
import "./App.css";
import Second from "./component/Second";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <Second />
    </div>
  );
}

export default App;
