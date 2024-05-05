/* eslint-disable no-unused-vars */
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header1";
import Notfound from "./component/Notfound";
import Home from "./Homepage/Home";
import Termsandcondition from "./admin/Termsandcondition";
import Refund from "./admin/Refund";
import Privacy from "./admin/Privacy";

import Admin from "./admin/Admin";
import Privacy_Admin from "./admin/Privacy_Admin";
import Terms_condition_admin from "./admin/Terms_condition_admin";
import Refund_admin from "./admin/Refund_admin";
import Faq_admin from "./admin/Faq_admin";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Termsandcondition />} />
        <Route path="/tc" element={<Termsandcondition />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/privacy" element={<Privacy_Admin />} />
        <Route path="/admin/tc" element={<Terms_condition_admin />} />
        <Route path="/admin/refund" element={<Refund_admin />} />
        <Route path="/admin/faq" element={<Faq_admin />} />
        <Route path="/*" element={<Notfound />} />

        {/* <Route path="/privacyPolicy" element={<PrivacyPolicy />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
