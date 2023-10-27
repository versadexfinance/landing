import React, { useState, useEffect } from "react";
import "../components/styles.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import images from "./logo/versa.png";
import "./Navbars.css";
import AnimatedPopup from "../components/Desktop/PopupAnimated";
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

      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a
            href=""
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
        <li className="p__opensans">
          <a
            href=""
            style={{ color: "#fff", fontWeight: "500", textDecoration: "none" }}
          >
            Team
          </a>
        </li>{" "}
      </ul>

      <ul className="app__navbar-linkss">
        <li className="p__opensans">
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
            <ul className="app__navbar-smallscreen_links">
              <li className="li">
                <a
                  href="#UtilityToken"
                  onClick={() => setToggleMenu(false)}
                  style={{ color: "#fff", fontWeight: "800" }}
                >
                  Utility Token
                </a>
              </li>
              <li className="li">
                <a
                  href="#IbizaPay"
                  onClick={() => setToggleMenu(false)}
                  style={{ color: "#fff", fontWeight: "800" }}
                >
                  IbizaPay
                </a>
              </li>{" "}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
