import React, { useState, useEffect } from "react";
import "../components/styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import images from "./logo/versa.png";
import "./Navbars.css";
import { Grid } from "@mui/material";
import AnimatedPopup from "../components/Desktop/PopupNav";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showLaunchButton, setShowLaunchButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      if (window.scrollY > 700) {
        setShowLaunchButton(true);
      } else {
        setShowLaunchButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`app__navbar${isSticky ? " sticky" : ""}`}>
      <Grid container>

              <Grid item md={3} lg={3}>    <div className="app__navbar-logo">
        <img src={images} alt="app__logo" />
      </div></Grid>
              <Grid item md={6} lg={6}>   <ul className="app__navbar-links">
        <li className="p__opensans">
          <a
            href="https://docs.versadex.finance/"
            target="_blank"
            style={{ color: "#fff", fontWeight: "500", textDecoration: "none" }}
          >
            Docs
          </a>
        </li>{" "}
        <li className="p__opensans">
          <a
           href='https://app.versadex.finance/swap'
            target="_blank"
            style={{ color: "#fff", fontWeight: "500", textDecoration: "none" }}
          >
            Testnet
          </a>
        </li>{" "}
    
      </ul></Grid>
              <Grid item md={3} lg={3}>
      <ul className="app__navbar-linkss" style={{position:"relative",  right:"60px"}}>
        <li className="">
          {showLaunchButton && (
           <AnimatedPopup/>
          )}
        </li>{" "}
      </ul></Grid>
      </Grid>
  

   


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <AiOutlineClose
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <br />
            <br />
          
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
