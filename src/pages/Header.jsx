import React from "react";
import LogoRuts from "../images/LogoRuts.png";
import LogoRmutsv from "../images/logoRmutsv.png";
import { Helmet } from "react-helmet-async";
function Header() {
  return (
    <>
      <Helmet>
          <title>การคุ้มครองข้อมูลส่วนบุคคล</title>
          <meta name="description" content="การคุ้มครองข้อมูลส่วนบุคคล มหาวิทยาลัยราชมงคลศรีวิชัย"/>
          <link rel="canonical" href="/" />
      </Helmet>
      <div className="container mt-3 mb-3 d-flex justify-content-center align-items-end">
        <img src={LogoRmutsv} alt="Logo Rmutsv" width="50" />
        <img src={LogoRuts} alt="Logo Ruts" width="250" />
        <h3>การคุ้มครองข้อมูลส่วนบุคคล</h3>

        <br />
      </div>
      <div className="container text-center">
        <p>
          Personal Data Protection Act(PDPA), Rajamangala University of
          Technology Srivijaya
        </p>
      </div>
    </>
  );
}

export default Header;
