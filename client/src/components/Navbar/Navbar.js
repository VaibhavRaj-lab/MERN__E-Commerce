import React, { useEffect, useState } from "react";
import amzn from "../../assets/logo.png";
import "./Navbar.css";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";

import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { orange, red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import {
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Container,
} from "@material-ui/core";
import { Button, Icon } from "semantic-ui-react";
import { auth } from "../../firebase";
import product from "../../utils/product";
import { useHistory } from "react-router";
import { AppBar } from "@material-ui/core";
import useStyle from "./style";
function Navbar(props) {
  const [{ basket, user }, dispatch] = useStateValue();

  const classes = useStyle();
  const [scrolled, hasscrolled] = useState();
  const [nav, setnav] = useState(false);
  const history = useHistory();
  useEffect(() => {
    if (user) {
      setnav(true);
      console.log("run");
    } else {
      setnav(false);
      console.log("flase");
    }
  }, user);
  console.log(nav);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        hasscrolled(true);
      } else {
        hasscrolled(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);
  const signoutHandler = (e) => {
    e.preventDefault();
    history.push("/");
    auth.signOut();
    dispatch({
      type: "Empty_Basket",
    });
  };
  const checkoutauth = () => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        history.push("/checkout");
      } else {
        history.push("/login");
      }
    });
  };
  const getAllItem = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    dispatch({
      type: "Update_List",
      item: product,
    });
  };

  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: scrolled ? "white" : " white",
          opacity: scrolled ? 0.9 : 1,
        }}
      >
        <div className="icon">
          <Link to="/" onClick={getAllItem}>
            <img src={amzn}></img>
          </Link>
        </div>
        <div className="Menu">
          <a href="https://www.instagram.com/v_ai_bhav_raj/">
            <div>
              <AiFillInstagram size={30}></AiFillInstagram>
            </div>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100009935971782">
            <div>
              <AiFillFacebook size={30}></AiFillFacebook>
            </div>
          </a>
          <a href="https://github.com/VaibhavRaj-lab">
            <div>
              <AiFillGithub size={30}></AiFillGithub>
            </div>
          </a>
        </div>
        <div className="side">
          {nav ? (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: "10px",
                }}
              >
                <Typography>YOU ARE WELCOME </Typography>
                <Typography style={{ color: "grey" }}>
                  {user
                    ? user.email.slice(0, user.email.indexOf("@"))
                    : "Guest"}
                </Typography>
              </div>
              <Button onClick={signoutHandler} color="red" inverted>
                SignOut
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button color="orange" inverted>
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button inverted color="violet">
                  {" "}
                  Signup
                </Button>
              </Link>
            </>
          )}

          <IconButton
            to="/checkout"
            aria-label="Show cart items"
            color="inherit"
          >
            <Badge badgeContent={basket?.length} color="primary">
              <Link onClick={checkoutauth}>
                <ShoppingCart style={{ color: "pink" }}></ShoppingCart>
              </Link>
            </Badge>
          </IconButton>
        </div>
      </div>
    </>
  );
}

export default Navbar;
