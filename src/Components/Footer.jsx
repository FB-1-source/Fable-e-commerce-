import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoname">
        <h3>Fable</h3>
        <b>
          <h6>Latest collection of shoes.</h6>
        </b>
      </div>
      <div className="Explore">
        <h3>Explore</h3>
        <div className="flinks">
          <Link style={{ textDecoration: "none" }} to="/">
            <a class=" fas2 navbar-brand" href="#">
              Home
            </a>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Products">
            <a class="fas2 navbar-brand" href="#">
              Products
            </a>
          </Link>
        </div>
      </div>
      <div className="Support">
        <h3>Support</h3>
        <b>
          <h6>LoremIpsum@LoremIpsum.com</h6>
        </b>
        <div className="socials">
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};

export default Footer;
