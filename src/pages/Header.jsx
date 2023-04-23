import React from "react";
import LogoRuts from "../images/cs2.png";
import LogoRmutsv from "../images/logoRmutsv.png";
import { Helmet } from "react-helmet-async";
function Header() {
  return (
    <>
      <Helmet>
          <title>Cyber Security</title>
          <meta name="description" content="การคุ้มครองข้อมูลส่วนบุคคล มหาวิทยาลัยราชมงคลศรีวิชัย Cyber Security"/>
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
          Cyber Security And Personal Data Protection Act(PDPA), Rajamangala University of
          Technology Srivijaya
        </p>
      </div>
    </>
  );
}

export default Header;
