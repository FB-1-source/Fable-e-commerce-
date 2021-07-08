import React, { useContext } from "react";
import { Contextcart } from "../App";

const Thankyou = () => {
  const [cartItems, , totalprice] = useContext(Contextcart);

  return (
    <div className="whole">
      <div className="thanks">
        {totalprice === 0 ? (
          <div>
            <h1>Thank you for visiting our site!</h1>{" "}
            <h5>Head to our Products page to add items to your cart!</h5>
          </div>
        ) : (
          <div>
            <h1>Thank you for your purchase!</h1>{" "}
            <h5>
              {" "}
              You ordered {cartItems.length}{" "}
              {cartItems.length > 1 ? "shoes" : "shoe"} and your total was{" "}
              {"$" + totalprice}
            </h5>
          </div>
        )}
      </div>
    </div>
  );
};

export default Thankyou;
