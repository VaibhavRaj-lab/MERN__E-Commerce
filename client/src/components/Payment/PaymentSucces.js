import React, { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import { auth, db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { Button } from "semantic-ui-react";
import { mergeClasses } from "@material-ui/styles";
import useStyle from "./style";
import { NavLink } from "react-router-dom";
function PaymentSucces(props) {
  const [state, reducer] = useStateValue();
  const [Items, setItems] = useState(null);
  const [getAmount, setgetAmount] = useState();
  console.log(state.user);
  const classes = useStyle();
  useEffect(async () => {
    console.log(state);
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get("id");

    await fetch(`https://emporium-backend.herokuapp.com/get?id=${sessionId}`)
      .then(async (response) => {
        const res = await response.json();
        console.log(res);
        console.log(res.session.amount_total);
        setgetAmount(res.session.amount_total / 100);
      })
      .catch((err) => {
        console.log(err);
      });
    const itemprice = state.basket.map((prod) => prod.price);
    console.log(itemprice);
    let numberArray = itemprice.map((el) => parseInt(el));
    let item = 0;
    numberArray.forEach((element) => {
      item += element;
      setItems(item);
    });
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        db.collection("user")
          .doc(authuser.uid)
          .collection("order")
          .doc(sessionId)
          .set({
            basket: state.basket,
            amount: item,
          });
        console.log(authuser);
      } else {
        alert("please login");
      }
    });
  }, []);
  return (
    <div className={classes.success}>
      <h1>Successfull</h1>
      <h2>Order Placed For Total amount of ₹{getAmount}</h2>
      <NavLink to="/">
        <Button color="orange">BUY MORE</Button>
      </NavLink>
    </div>
  );
}

export default PaymentSucces;
