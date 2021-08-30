import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Button, Icon } from "semantic-ui-react";
import UseStyle from "./style";
import img from "../../assets/maxresdefault.jpg";
import "../Home/Home.css";
import { auth } from "../../firebase";
// import product from "../../utils/product";
import { useStateValue } from "../../StateProvider";

import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import { CardMedia } from "@material-ui/core";
import { useHistory } from "react-router-dom";
function Product({ product }) {
  const classes = UseStyle();
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();
  const addtobasket = (e) => {
    console.log(product.title);
    // console.log(basket);

    if (user) {
      dispatch({
        type: "Add_To_Basket",
        item: {
          id: product.id,
          title: product.title,
          price: product.price,
          description: product.description,
          img: product.img,
        },
      });
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="card">
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={product.img}></CardMedia>
        <Typography variant="h5">{product.description}</Typography>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h5" value={product.title}>
              {product.title}
            </Typography>
            <Typography variant="h5" value={product.price}>
              ₹ {product.price}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.btn}>
          <Button
            onClick={addtobasket}
            animated="vertical"
            color="white"
            className={classes.btn1}
            size="large"
            fluid
          >
            <Button.Content hidden>Add To Basket</Button.Content>
            <Button.Content visible>
              <Icon name="shop" color="orange" />
            </Button.Content>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Product;
