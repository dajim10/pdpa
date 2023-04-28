import React from 'react'

import { Link } from 'react-router-dom';
import appoint from '../pdf/appointmentPDPA_2.pdf'
import pdpa_2562 from '../pdf/announce_pdpa_rmutsv.pdf'
import pdpa_rmutsv from '../pdf/annouce_pdpa2562.pdf'

function Pdpa() {
  return (
    <>
      <div className="container text-center mt-3 mb-3">
        <div className="row">
          <div className="col-lg">
            <ul className="list-group">
              <li className='list-group-item'><a class="nav-link" href={appoint} target='_blank'>คำสั่งแต่งตั้งคณะกรรมการคุ้มครองข้อมูลส่วนบุคคล  และ    พระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
              <li className='list-group-item'><a class="nav-link" href={pdpa_rmutsv} target='_blank'>ประกาศนโยบายคุ้มครองข้อมูลส่วนบุคคล มทร.ศรีวิชัย พ.ศ. 2566 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
              <li className='list-group-item'><a class="nav-link" href={pdpa_2562} target='_blank'>หลักเกณฑ์และวิธีการคุ้มครองข้อมูลส่วนบุคคล มทร.ศรีวิชัย พ.ศ.2566 <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/PDF_file_icon.svg" width={20} alt="" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pdpa