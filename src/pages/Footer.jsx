import React from "react";
import './footer.css'
import Logo from '../images/Logo-RUTS.png'
function Footer() {
  return (
    <div className="container-fluid bg-dark text-light">
      <footer className="py-5">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-4">
            <img src={Logo} alt="logo ruts" className="mb-2 rounded shadow" />
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

          <div className="col-4 offset-1">
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FRMUTSV&tabs=timeline&width=340&height=331&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=5348602521830242"
              width="340"
              height="331"
              style={{border:'none',overflow:'hidden'}}
              scrolling="no"
              frameborder="0"
              allowfullscreen="true"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="col-2"></div>
        </div>

        <div className="d-flex justify-content-center py-4 my-4 border-top">
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