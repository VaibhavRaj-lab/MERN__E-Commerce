import "./Checkout.css";
import banner from "../../assets/banner.png";
import { useStateValue } from "../../StateProvider";
import CheckoutItems from "./CheckoutItems";
// import { ClassNames } from "@emotion/react";
import { Grid } from "@material-ui/core";
import { Button } from "semantic-ui-react";
import useStyle from "./style";
import { orange } from "@material-ui/core/colors";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { NavLink, useHistory } from "react-router-dom";

function Checkout(props) {
  const classes = useStyle();
  const [qauntity, setqauntity] = useState(true);
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  useEffect(() => {
    const controlqauntity = () => {
      if (basket?.length === 0) {
        setqauntity(true);
      } else {
        setqauntity(false);
      }
    };
    controlqauntity();
  }, [basket]);
  useEffect(() => {
    if (user) {
      history.push("/checkout");
    } else {
      history.push("/login");
    }
  }, []);

  const itemprice = basket.map((prod) => prod.price);

  let numberArray = itemprice.map((el) => parseInt(el));
  let item = 0;
  numberArray.forEach((element) => {
    item += element;
  });
  console.log(item);
  console.log(qauntity);
  console.log(basket);

  return (
    <div>
      <div className="checkout">
        {qauntity ? (
          <>
            <div className="Empty">
              <h1 style={{ color: "orange" }}>YOUR BASKET IS EMPTY</h1>
              <NavLink to="/">
                <Button color="orange">Go To Shop</Button>
              </NavLink>
            </div>
          </>
        ) : (
          <>
            <div className="checkoutleft">
              <h2
                style={{
                  color: "white",
                  backgroundColor: "grey",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Your Shopping Cart
              </h2>
              <div className="renderitem">
                <Grid container spacing={2} className="renderitem">
                  {basket.map((item) => (
                    <Grid item xs={3} className={classes.root}>
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
          </>
        )}
        <hr></hr>
        <div
          className="checkoutright"
          style={{ color: "black" }}
          style={{ opacity: qauntity ? 0 : 1 }}
        >
          <h5 className="checkouttitle">Subtotal={basket?.length}</h5>
          <h5>price= ₹ {item}</h5>
          <p>Your Order is eligible for Free DELIVERy.</p>

          <div className={classes.btn}>
            <NavLink to="payment">
              <Button style={{ margin: "2px" }} color="orange" fluid>
                Proceed To Buy
              </Button>
            </NavLink>
            <NavLink to="/">
              <Button color="olive">Go To Shop</Button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
