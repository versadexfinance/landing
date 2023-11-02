import React, { useState, useEffect } from "react";
import "../components/styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import images from "./logo/versa.png";
import "./TabNavbars.css";
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
      <div className="app__navbar-logo">
        <img src={images} alt="app__logo" />
      </div>

      <ul className="app__navbar-linkst" >
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
            href=""
            style={{ color: "#fff", fontWeight: "500", textDecoration: "none" }}
          >
            Testnet
          </a>
        </li>{" "}
    
      </ul>

      <ul className="app__navbar-linkss" style={{position:"relative",  right:"60px"}}>
        <li className="">
          {showLaunchButton && (
           <AnimatedPopup/>
          )}
        </li>{" "}
      </ul>

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
