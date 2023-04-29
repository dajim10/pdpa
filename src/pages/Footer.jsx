import React from "react";
import Logo from '../images/Logo-RUTS.png'
function Footer() {
  return (
    <div className="container-fluid bg-dark text-light">
      <footer className="py-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-4 col-sm text-center mb-3">
            <img src={Logo} alt="logo ruts" className="img-fluid mb-2 rounded shadow" />
            <h5>มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</h5>
            <ul className="nav flex-column">
              <li className="list-unstyled">ที่ตั้ง : เลขที่ 1</li>
              <li className="list-unstyled">
                ถ.ราชดำเนินนอก ต.บ่อยาง อ.เมือง จ.สงขลา 90000
              </li>
              <li className="list-unstyled">หมายเลขโทรศัพท์ : 0-7431-7100</li>
              <li className="list-unstyled">
                หมายเลขโทรสาร : 0-7431-7123
              </li>{" "}
              <li className="list-unstyled">
                Website : https://www.rmutsv.ac.th/
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-sm text-center">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRMUTSV"
              width="340"
              height="200"
              style={{ border: "1px", overflow: "hidden" }}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
            <br />
            <div className="text-center">
              <a
                href="https://www.youtube.com/channel/UC5qlxYrr7VWgf1L1M8VC9WA"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className="fa-brands fa-youtube text-danger text-center"
                  style={{ fontSize: "35px" }}
                >
                  <h6 className="text-light">Rmutsv Youtube Channel</h6>
                </i>
              </a>
            </div>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="d-flex justify-content-center  border-top">
          <p>&copy; 2022 RUTS All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            {/* <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
        <li className="ms-3"><a className="link-dark" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li> */}
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
