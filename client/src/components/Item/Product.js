import React from "react";
import ProductItem from "./ProductItem";
import { useStateValue } from "../../StateProvider";
import UseStyle from "./style";
import { Grid } from "@material-ui/core";

function Product(props) {
  const [state, dispatch] = useStateValue();
  const classes = UseStyle();
  console.log(state);
  const abc = state.Menulist;
  console.log(state.Menulist);
  console.log(abc);
  return (
    <div>
      <div className={classes.root}>
        <Grid container justifyContent="center" spacing={2}>
          {abc.map((prod) => {
            return (
              <Grid key={prod.id} item xs={12} sm={6} md={4} lg={3}>
                <ProductItem product={prod}></ProductItem>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Product;
