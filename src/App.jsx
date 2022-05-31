import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import T_0052 from "./pdf/T_0052.pdf";
import CookieConsent from "react-cookie-consent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Nav />
      <CookieConsent
        debug={true}
        style={{ background: "#001D6E", }}
        buttonText="เข้าใจแล้ว"
        
      >
        เว็ปไซด์นี้มีการเก็บ Cookies
      </CookieConsent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/T_0052" element={<T_0052 />} />
      </Routes>
    </Router>
  );
}

export default App;
