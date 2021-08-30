import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { useStateValue } from "../../StateProvider";
import product from "../../utils/product";
import "./Overlay.css";

function Item(props) {
  // const [Menulist, setMenuList] = useState(product);
  const [state, dispatch] = useStateValue();

  const filterMenu = (category) => {
    console.log("clicked");
    const updatedlist = product.filter((prod) => {
      return prod.category === category;
    });
    dispatch({
      type: "Update_List",
      item: updatedlist,
    });
    window.scrollTo({
      top: 1680,
      behavior: "smooth",
    });
    console.log(state);
  };

  return (
    <>
      <Grid
        item
        xs={6}
        sm={4}
        onClick={() => {
          filterMenu(props.title);
        }}
      >
        <div className="images">
          <img className="images__img" src={props.img}></img>
          <div className="images__overlay">
            <h4>{props.title}</h4>
            <p>classic and fashionable</p>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default Item;
