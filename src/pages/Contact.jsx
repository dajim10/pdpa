import React from 'react'
import LogoRuts from '../images/Logo-RUTS.png'
function Contact() {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-sm mt-3 ">
            <img
              src={LogoRuts}
              alt="logo ruts"
              className="img-fluid rounded shadow mb-3"
            />
            <h5>มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย</h5>
            <li className="list-unstyled">ที่ตั้ง : เลขที่ 1</li>
            <li className="list-unstyled">
              ถ.ราชดำเนินนอก ต.บ่อยาง อ.เมือง จ.สงขลา 90000
            </li>
            <li className="list-unstyled">หมายเลขโทรศัพท์ : 0-7431-7100</li>
            <li className="list-unstyled">หมายเลขโทรสาร : 0-7431-7123</li>{" "}
            <li className="list-unstyled">
              Website : https://www.rmutsv.ac.th/
            </li>
          </div>
          <div className="col-sm mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31666.77298323584!2d100.599983!3d7.201235999999999!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd6d338453d775d8f!2sRajamangala%20University%20of%20Technology%20Srivijaya!5e0!3m2!1sen!2sth!4v1653972069232!5m2!1sen!2sth"
              className="rounded shadow"
              style={{border:'0',height:'50vh',width:'50vw'}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact