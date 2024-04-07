/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header1";

import Home from "./Homepage/Home";
import Termsandcondition from "./admin/Termsandcondition";
import Refund from "./admin/Refund";
import Privacy from "./admin/Privacy";

// import Dashboard from "./Admin/";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tc" element={<Termsandcondition />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="privacy" element={<Privacy />} />
        {/* <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
