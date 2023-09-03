import React, { Fragment } from "react";
import TelegramApp from "../../Assets/telegram.png";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Text, useMediaQuery } from "@chakra-ui/react";
import './Footer.css'

const Footer = () => {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:800px)");

  return (
      <Fragment>
        <footer id="footer">
          <div className="leftFooter">
            <p>Download App for Android and IOS mobile phone</p>
            <Link to="/">
           <img src={TelegramApp} alt="Get This App on Telegram"></img>
           </Link>
          </div>

          <div className="midFooter">
          <Text fontSize={isNotSmallerScreen ? '50' : '20'} bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip='text'>DocLocKr</Text>

            <p>All right reserved @DocLocKr </p>
            <Link to='/'>Contact us </Link>
            <Link to='/'>About us </Link>
          </div>

          <div className="rightFooter">
            <h4>Follow Us</h4>
            <a href="http://instagram.com/ifeelpankaj">
              <BsInstagram />
            </a>
            <p>Instagram</p>
            <a href="http://instagram.com/ifeelpankaj">
              <BsFacebook />
            </a>
            <p>Facebook</p>
            <a href="https://www.linkedin.com/in/ifeelpankaj/">
              <BsTelegram />
            </a>
            <p>Telegram</p>
          </div>
        </footer>
        <div className="blank"></div>
      </Fragment>
    // </Fragment>
  );
};

export default Footer;
