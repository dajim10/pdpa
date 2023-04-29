import React from "react";
import './nav.css'
import { Link } from "react-router-dom"
import Pdf from '../pdf/pdpa_2562.pdf'
import AppointMent from '../pdf/appointmentPDPA.pdf'
// import Header from "./Header";

function Nav() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark ruts-bg-color">
      <div className="container">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                <i className="fa fa-home"></i> หน้าแรก
              </Link>
            </li>

           
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                ข้อมูลเผยแพร่
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a href={AppointMent} target="_blank" className="dropdown-item">คำสั่งแต่งตั้งคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล</a>
                </li>
               
                <li>
                  <a href= {Pdf} target = "_blank"  className="dropdown-item">
                  พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล
                  </a>
                </li>
              </ul>
            </li>
           
            <li className="nav-item">
              <Link to ="/contact" className="nav-link">ติดต่อเรา</Link>
            </li>
          </ul>
        </div>
      </div>
      </nav>

  );
}

export default Nav;
