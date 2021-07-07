import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Contextcart } from "../App";
import Badge from "@material-ui/core/Badge";

const Navbar = () => {
  const [cartItems] = useContext(Contextcart);
  return (
    <div>
      <nav class="navbar sticky-top navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <h2>Fable</h2>
        </a>
        <div className="part">
          <Link style={{ textDecoration: "none" }} to="/">
            <a class="navbar-brand" href="#">
              Home
            </a>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Products">
            <a class="navbar-brand" href="#">
              Products
            </a>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/Cart">
            <a style={{ textDecoration: "none" }} href="#">
              <i class="fas fa-shopping-cart">
                {" "}
                <Badge
                  className="badge"
                  badgeContent={cartItems.length}
                  color="primary"
                ></Badge>
              </i>
            </a>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
