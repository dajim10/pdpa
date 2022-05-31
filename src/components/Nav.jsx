import React from "react";
import './nav.css'
import {Link} from "react-router-dom"

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
              <Link to ="/" className="nav-link active" aria-current="page" href="#">
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
                เจ้าหน้าที่
              </a>

              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/employee"className="dropdown-item" href="#">
                    คณะทำงาน
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    เจ้าหน้าที่คุ้มครองข้อมูลส่วนบุคคล
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">ประกาศเกี่ยวกับความเป็นส่วนตัว</a>
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
                  <Link to ="/T_0052" className="dropdown-item" href="../pdf/T_0052.pdf">
                    พ.ร.บ.คุ้มครองข้อมูลส่วนบุคคล
                  </Link>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    นโยบายธรรมาภิบาลข้อมูล
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    นโยบายการคุ้มครองข้อมูลส่วนบุคคล
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    นโยบายการใช้คุกกี้
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Template เอกสาร PDPA
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link">การขอใช้สิทธิ์ข้อมูลส่วนบุคคล</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">แจ้งร้องเรียน</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">ติดต่อเรา</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;