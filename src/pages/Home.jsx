import React,{useState} from 'react'
import PDPA_IMG from '../images/Acting1.png'
import Cyber_img from '../images/Acting2.png'
import Modal from 'react-bootstrap/Modal';
import appoint from '../pdf/appointmentPDPA_2.pdf'
import pdpa_2562 from '../pdf/announce_pdpa_rmutsv.pdf'
import pdpa_rmutsv from '../pdf/annouce_pdpa2562.pdf'

import { Link } from 'react-router-dom'


function Home() {
  const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <>
      
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Personal Data Protection Act (PDPA)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ul className="list-group">
              <li className='list-group-item'><a class="nav-link" href={appoint} target='_blank'>คำสั่งแต่งตั้งคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล  และ    พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
              <li className='list-group-item'><a class="nav-link" href={pdpa_rmutsv} target='_blank'>ประกาศนโยบายคุ้มครองข้อมูลส่วนบุคคล มทร.ศรีวิชัย พ.ศ. 2566 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
              <li className='list-group-item'><a class="nav-link" href={pdpa_2562} target='_blank'>หลักเกณฑ์และวิธีการคุ้มครองข้อมูลส่วนบุคคล มทร.ศรีวิชัย พ.ศ.2566 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
            </ul>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>


      <div className="container text-center mt-5">

      <div className="row">
          <div className="col-lg-6 col-md mb-5">

            {/* <Link to = '/pdpa'>
              <img src={PDPA_IMG} alt="pdpa image" className='img-fluid rounded shadow' style={{height:'500px'}} />
           </Link> */}
             <img src={PDPA_IMG} alt="pdpa image" className='img-fluid rounded shadow' style={{height:'500px'}} onClick={handleShow}/>
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