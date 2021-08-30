import React from "react";
import { Button, Icon } from "semantic-ui-react";
import "./Footer.css";
import { AiFillInstagram, AiFillGithub, AiFillFacebook } from "react-icons/ai";
// import { AiOutlineFacebook } from "react-icons/fa";
function Footer(props) {
  return (
    <div className="footer">
      <div className="footer_icons">
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
    </div>
  );
}

export default Footer;
