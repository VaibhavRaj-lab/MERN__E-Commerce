import React, { useEffect, useState } from "react";
import CheckoutItems from "../Checkout/CheckoutItems";
import { useStateValue } from "../../StateProvider";
import {
  CardElement,
  useStripe,
  useElements,
  IdealBankElement,
} from "@stripe/react-stripe-js";
import { Grid } from "@material-ui/core";
import useStyle from "./style";

import Checkout from "../Checkout/Checkout";
import "./Payment.css";
import axios from "../../axios";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { db } from "../../firebase";
function Payment(props) {
  const [{ basket, user, basket1 }, reducer] = useStateValue();
  const history = useHistory();

  const [basketIsZero, setbaskeIsZero] = useState(false);
  const [soson, setsoson] = useState();
  const [cartItem, setCartIttem] = useState(0);
  const stripe = useStripe();

  const classes = useStyle();
  useEffect(() => {
    const basket2 = window.localStorage.getItem("data");
    console.log(basket2);
    reducer({
      type: "Basket_for_order",
      items: basket2,
    });
    console.log(basket1);
  }, []);
  useEffect(() => {
    if (basket.length === 0) {
      setbaskeIsZero(true);
    }
    //   generates the special stripe secret which allows us to change a customer
    const getClientSecret = async () => {
      const itemprice = basket.map((prod) => prod.price);

      let numberArray = itemprice.map((el) => parseInt(el));
      let item = 0;
      numberArray.forEach((element) => {
        item += element;
        setCartIttem(item);
      });
      console.log(item);
    };
    getClientSecret();
  }, [basket]);

  const makepayment = async (e) => {
    e.preventDefault();

    const qaunity_item = basket.length;
    const body = {
      basket: basket,
      price: cartItem,
      qauntity: qaunity_item,
    };
    console.log(body.qauntity);

    const response = await fetch(
      "https://emporium-backend.herokuapp.com/create",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      }
    ).then(async (res) => {
      console.log(res);
      const session = await res.json();

      const sessionId = session.session;
      console.log(sessionId);
      reducer({
        type: "Set_SessionId",
        id: sessionId,
      });
      const data = await stripe.redirectToCheckout({ sessionId });
    });
  };

  return (
    <>
      {basketIsZero ? (
        <Checkout />
      ) : (
        <div className="payment">
          <div className="section">
            <div className="section_checkout">
              <h1>CHECKOUT ({basket.length} items)</h1>
            </div>
          </div>
          <div className="section">
            <div className="">
              <Grid container spacing={2} className="renderitem">
                {basket.map((item) => (
                  <Grid item xs={2} className={classes.root}>
                    <CheckoutItems
                      title={item.title}
                      price={item.price}
                      img={item.img}
                      description={item.description}
                      item={item}
                    ></CheckoutItems>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="Payment_Method">
            <div className="Payment_details">TOTAL= ₹{cartItem} </div>
            <Button color="primary" onClick={makepayment}>
              Proceed To Checkout
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Payment;
