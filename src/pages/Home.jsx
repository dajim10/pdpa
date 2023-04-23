import React from 'react'
import SecurityImg from '../images/security_image.png'
import Slide1 from '../images/pdpa_slide.png'
import PDPA_IMG from '../images/Acting1.png'
import Cyber_img from '../images/Acting2.png'
import PDPA_PDF from '../pdf/appointmentPDPA_2.pdf'

function Home() {
  return (
    <>
      <div className="container text-center mt-5">

      <div className="row">
          <div className="col-lg-6 col-md mb-5">

            <a href={PDPA_PDF} target='_blank'>
              <img src={PDPA_IMG} alt="pdpa image" className='img-fluid rounded shadow' style={{height:'500px'}} />
           </a>

          </div>
          <div className="col-lg-6 col-md mb-5">
            <img src={Cyber_img} alt="cyber security" className='img-fluid rounded shadow' style={{height:'500px'}}/>
          </div>
        {/* <Slide /> */}
      </div>
      </div>
      <div className="container d-flex text-center justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <p>
              PDPA (Personal Data Protection Act) หรือ พ.ร.บ. คุ้มครองส่วนบุคคล
              คือ พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562
              ซึ่งได้ประกาศในราชกิจจานุเบกษาไปเมื่อ 27 พฤษภาคม 2562
              โดยระบุให้องค์กรหรือหน่วยงานที่เกี่ยวข้องที่เก็บข้อมูลส่วนบุคคลของประชาชนไม่ว่าจะเป็นบริษัทเอกชน
              หรือหน่วยงานภาครัฐ
              ต้องไม่นำเอาข้อมูลส่วนตัวของเราไปใช้ในกิจกรรมอื่น ๆ
              ที่เราไม่ยินยอม
            </p>
            <hr />
          </div>
          <div className="row">
            <div className="col" style={{ lineHeight: "45px" }}>
              <ul>
                <li className="list-unstyled">
                  <i className="fa fa-check-circle text-success" style={{fontSize: "25px"}}></i>{" "}
                  เพื่อไม่ให้ถูกละเมิดสิทธิความเป็นส่วนตัว
                </li>
                <li className="list-unstyled">
                  <i className="fa fa-check-circle text-success" style={{fontSize: "25px"}}></i>{" "}
                  เพื่อให้มีมาตรการเยียวยาเจ้าของข้อมูลในกรณีที่ถูกละเมิดข้อมูลส่วนบุคคล
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home