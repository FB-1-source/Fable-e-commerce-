import React, { useContext } from "react";
import { Contextcart } from "../App";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setcartItems, totalprice] = useContext(Contextcart);
  const Removefromcart = (productRemove) => {
    setcartItems(cartItems.filter((item) => item !== productRemove));
  };
  return (
    <div className="ctop">
      <div className="allcbox">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
          <div>There are no items in your cart</div>
        ) : (
          ""
        )}
        {cartItems.map((item) => (
          <div className="cbox">
            <img className="cimgs" src={item.image} alt={item.name}></img>
            <div className="cbox2">
              <div>{item.name}</div>
              <div>{"$" + item.price}</div>
              <button
                onClick={() => {
                  Removefromcart(item);
                }}
                class="btn-cart2 btn-dark"
                type="button"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <h4>
          <b>Total: {"$" + totalprice}</b>
        </h4>
        {cartItems.length === 0 ? (
          ""
        ) : (
          <Link style={{ textDecoration: "none" }} to="/Thankyou">
            <button
              onClick={() =>
                setTimeout(() => {
                  window.location.href = "/";
                }, 4000)
              }
              class="btn-cart btn-dark"
              type="button"
            >
              Checkout
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
