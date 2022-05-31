import React from "react";
import "./slice.css";
import Slide1 from "../images/pdpa_slide.png";
import Slide2 from "../images/pdpa_slide1.png";
import Slide3 from "../images/pdpa_slide2.png";
function Slide() {
  return (
    <div className="container text-center">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={Slide1}
              className="d-block rounded shadow mt-3 mb-3"
              alt="PDPA Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide2}
              className="d-block rounded shadow mt-3 mb-3"
              alt="PDPA Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={Slide3}
              className="d-block rounded shadow mt-3 mb-3"
              alt="PDPA Slice 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slide;
