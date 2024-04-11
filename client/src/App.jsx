/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header1";

import Home from "./Homepage/Home";
import Termsandcondition from "./admin/Termsandcondition";
import Refund from "./admin/Refund";
import Privacy from "./admin/Privacy";

import Admin from "./admin/Admin";
import Privacy_Admin from "./admin/Privacy_Admin";
import Terms_condition_admin from "./admin/Terms_condition_admin";
import Refund_admin from "./admin/Refund_admin";
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tc" element={<Termsandcondition />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/privacy" element={<Privacy_Admin />} />
        <Route path="/admin/tc" element={<Terms_condition_admin />} />
        <Route path="/admin/refund" element={<Refund_admin />} />

        {/* <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

