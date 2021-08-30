import "./App.css";
import Home from "./components/Home/Home";

import React, { useEffect, useState } from "react";
import { Switch, Route, BrowserRouter, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import DotLoader from "react-spinners/DotLoader";
import { css } from "@emotion/react";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import { auth } from "./firebase";
import Product from "./components/Item/Product";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentSucces from "./components/Payment/PaymentSucces";
import Hero from "./components/Hero/Hero";
import { useStateValue } from "./StateProvider";
import ScrollToTop from "./scrollTop";
const promsie = loadStripe(
  "pk_test_51JM83uBoHPJJc0ZnQ0olFXpCW1sSUtT2Cf4TK5rnwO0Op91ucuH6NQMPeQpXCKjLCDme9alwxlFovjEy8iOKsvko003zJt3UDJ"
);
function App(props) {
  const [loading, setloading] = useState("");
  const [{ user, basket }, dispatch] = useStateValue();
  const override = css`
    margin-top: 300px;
    margin-bottom: 325px;
  `;
  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch({
          type: "Create_User",
          user: authuser,
        });
      } else {
        dispatch({
          type: "Create_User",
          user: null,
        });
      }
    });
    setloading(true);

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);
  function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    return null;
  }

  useEffect(() => {
    const basket1 = JSON.stringify(basket);
    window.localStorage.setItem("data", basket1);
  }, [basket]);
  return (
    <>
      {loading ? (
        <>
          <div className="loader">
            <DotLoader
              color="orange"
              loading={loading}
              size={100}
              css={override}
            />
          </div>
        </>
      ) : (
        <>
          <div className="app">
            <BrowserRouter>
              <ScrollToTop />
              <Navbar></Navbar>
              <Switch>
                <Route exact path="/">
                  <Hero></Hero>
                  <Home></Home>
                  <Product></Product>
                </Route>
                <Route path="/checkout">
                  <Checkout></Checkout>
                </Route>

                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="/signup">
                  <Signup></Signup>
                </Route>
                <Route exact path="/payment">
                  <Elements stripe={promsie}>
                    <Payment></Payment>
                  </Elements>
                </Route>
                <Route path="/payment/success">
                  <PaymentSucces></PaymentSucces>
                </Route>
              </Switch>
              <Footer></Footer>
            </BrowserRouter>
          </div>
        </>
      )}
    </>
  );
}

export default App;
