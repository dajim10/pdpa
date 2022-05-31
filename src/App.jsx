import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Employee from "./pages/Employee";
import T_0052 from "./pdf/T_0052.pdf";
import CookieConsent from "react-cookie-consent";
import Cookies from './pages/Cookies'
import Contact from "./pages/Contact"
import Footer from './pages/Footer'

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Nav />
      <CookieConsent
        debug={true}
        style={{ background: "#001D6E" }}
        buttonText="ยอมรับ"
        buttonStyle={{fontSize:'14px',background:'#000',color:'#fff'}}
      >
        เว็บไซต์นี้ใช้คุกกี้
        เราใช้คุกกี้เพื่อเพิ่มประสบการณ์ที่ดีในการใช้เว็บไซต์
        แสดงเนื้อหาและโฆษณาให้ตรงกับความสนใจ
        รวมถึงเพื่อวิเคราะห์การเข้าใช้งานเว็บไซต์และทำความเข้าใจว่าผู้ใช้งานมาจากที่ใด
        คุณสามารถเลือกตั้งค่าความยินยอมการใช้คุกกี้ได้ โดยคลิก
        “การตั้งค่าคุกกี้”นโยบายความเป็นส่วนตัว

      </CookieConsent>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/T_0052" element={<T_0052 />} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
