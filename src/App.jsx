import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
// import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import T_0052 from "./pdf/T_0052.pdf";
import pdpa_2562 from "./pdf/pdpa_2562.pdf"
import CookieConsent from "react-cookie-consent";
import Cookies from './pages/Cookies'
import Contact from "./pages/Contact"
import Footer from './pages/Footer'
import Pdpa from "./pages/pdpa";
import { Helmet } from "react-helmet-async";
import LogoRuts from "./images/cs2.png";
import LogoRmutsv from "./images/logoRmutsv.png";


function App() {
  const [count, setCount] = useState(0);

  return (

    <Router>
      {/* <Header /> */}
      <CookieConsent
        debug={true}
        style={{ background: "rgba(0,0,0,0.7)", textAlign: "center" }}
        buttonText="ยอมรับ"
        buttonStyle={{ fontSize: "14px", background: "#000", color: "#fff" }}
      >
        เราใช้คุกกี้เพื่อเพิ่มประสิทธิภาพและประสบการณ์ที่ดีในการใช้เว็บไซต์
        ท่านสามารถศึกษารายละเอียดการใช้คุกกี้ได้ที่{" "}
        <Link to="/cookies" className="text-warning nav-link">“นโยบายการใช้คุกกี้”</Link>
      </CookieConsent>

      <Helmet>
        <title>Cyber Security</title>
        <meta name="description" content="การคุ้มครองข้อมูลส่วนบุคคล มหาวิทยาลัยราชมงคลศรีวิชัย Cyber Security" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="container mt-3 mb-3 d-flex justify-content-center align-items-end">
        <img src={LogoRmutsv} alt="Logo Rmutsv" width="50" />
        <img src={LogoRuts} alt="Logo Ruts" width="250" />
        {/* <h1>Cyber Security</h1> */}

        <br />
      </div>
      <div className="container text-center">
        <p>
          Cyber Security And Personal Data Protection Act (PDPA), Rajamangala University of
          Technology Srivijaya
        </p>
      </div>

      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/T_0052" element={<T_0052 />} />
        <Route path="/pdpa_2562" element={<pdpa_2562 />}/>
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pdpa" element={<Pdpa />} />
      </Routes>
      <Footer />
</Router>

  );
}

export default App;
