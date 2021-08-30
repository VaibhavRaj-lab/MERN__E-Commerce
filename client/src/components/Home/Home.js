import React from "react";
import "./Home.css";
import { Grid } from "@material-ui/core";
import UseStyle from "../Item/style";
import { useStateValue } from "../../../src/StateProvider";
import "./Overlay.css";
import Item from "./Item";

import Product from "../Item/ProductItem";
function Home(props) {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundSize: "cover",
          // backgroundColor: "white",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "centre centre",
        }}
      >
        <div className="Homefilter">
          <Grid container>
            <Item
              title="Jewellery"
              img="https://images.unsplash.com/photo-1611540280958-dc93ce74f8d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></Item>
            <Item
              title="Shirt"
              img="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            ></Item>
            <Item
              title="Headphone"
              img="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></Item>
            <Item
              title="Sunglasses"
              img="https://images.unsplash.com/photo-1586339392738-65847e399f7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHN1bmdsYXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            ></Item>

            <Item
              title="Camera"
              img="https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></Item>
            <Item
              title="Shoes"
              img="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            ></Item>
          </Grid>
        </div>
      </div>
    </>
  );
}

export default Home;
