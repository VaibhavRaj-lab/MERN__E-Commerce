import { CardMedia, Card, Typography, CardContent } from "@material-ui/core";
import React, { useEffect, useState } from "react";
// import { orange } from "@material-ui/core/colors";
import { Button } from "semantic-ui-react";
import { useStateValue } from "../../StateProvider";

import UseStyle from "./style";

function CheckoutItems({ item }) {
  const [{ basket }, dispatch] = useStateValue();
  const [price, setPrice] = useState();
  const removeFromBasket = () => {
    console.log(item.id);
    dispatch({
      type: "Remove_From_Basket",
      id: item.id,
    });
  };

  const classes = UseStyle();
  console.log(item.description);
  return (
    <div className={classes.checkout}>
      <Card className={classes.card}>
        <div>
          <CardMedia className={classes.media} image={item.img}></CardMedia>
        </div>
        <div>
          <Typography variant="h5">{item.description}</Typography>
        </div>
        <CardContent>
          <div className={classes.content}>
            <Typography variant="h5">{item.title}</Typography>
            <Typography variant="h5" value={item.price}>
              ₹ {item.price}
            </Typography>
          </div>
        </CardContent>
        <div className={classes.btn}>
          <Button onClick={removeFromBasket} fluid>
            Remove From Basket
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default CheckoutItems;
