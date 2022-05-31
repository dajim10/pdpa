import React from 'react'
import CookiesImage from '../images/cookie.png'
function Cookies() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <div className="col-lg col-sm">
          <img src={CookiesImage} className="img-fluid rounded-2 shadow-lg mb-2" alt="Cookie Policy" />
        </div>
      </div>
    </div>
  );
}

export default Cookies