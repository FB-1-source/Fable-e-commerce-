import React, { createContext, useState } from "react";
import Navbar from "./Components/Navbar";
import Mid from "./Components/Mid";
import Featured from "./Components/Featured";
import Footer from "./Components/Footer";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Newsletter from "./Components/Newsletter";
import Thankyou from "./Components/Thankyou";

export const Contextcart = createContext([[], () => {}]);

const App = () => {
  const cartfromLocalStorage = JSON.parse(
    localStorage.getItem("carItems") || "[]"
  );
  const [cartItems, setcartItems] = useState(cartfromLocalStorage);
  const totalprice = cartItems.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Contextcart.Provider value={[cartItems, setcartItems, totalprice]}>
      <div>
        <Router>
          <ScrollToTop />
          <Switch>
            <Route exact path="/Products">
              <Navbar />
              <Products />
              <Footer />
            </Route>
            <Route exact path="/Thankyou">
              <Navbar />
              <Thankyou />
            </Route>
            <Route exact path="/Cart">
              <Navbar />
              <Cart />
              <Footer />
            </Route>
            <Route exact path="/">
              <Navbar />
              <Mid />
              <Featured />
              <Newsletter />
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    </Contextcart.Provider>
  );
};

export default App;
