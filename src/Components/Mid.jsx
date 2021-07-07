import React from "react";
import img1 from "../images/img1.jpeg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import img11 from "../images/img11.jpeg";
import img12 from "../images/img12.jpeg";

const Mid = () => {
  return (
    <div className="double">
      <div className="name">
        <h1>Find the latest Nike & Jordan sneakers</h1>
        <div className="name2">
          <h6>Explore our new collection of sneakers</h6>
          <Link style={{ textDecoration: "none" }} to="/Products">
            <button type="button" class="btn btn-dark btn1">
              Explore Now
            </button>
          </Link>
        </div>
      </div>
      <div className="caros">
        <Carousel
          showArrows={false}
          width={"100%"}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          autoPlay
        >
          <div className="imgscaro">
            <img src={img1} alt="jtop3"></img>
          </div>
          <div className="imgscaro">
            <img src={img11} alt="jordan5"></img>
          </div>
          <div className="imgscaro">
            <img src={img12} alt="jordan3"></img>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Mid;
