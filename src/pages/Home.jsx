import React from "react";

import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";


import Navbar from "../Navbar/Navbar";
import Hero from "../components/Desktop/Hero";
import SwapDesign from "../components/Desktop/SwapDesign";
import SectionThree from "../components/Desktop/SectionThreeX";
import Footer from "../components/Desktop/Footer";
import Defi from '../components/Desktop/FooterX'
import Yield from '../components/Desktop/Yield'





import MobileNavbar from "../Navbar/MobileNavbar";
import HeroMobile from "../components/Mobile/HeroMobile";
import DefiMobile from '../components/Mobile/DefiMobile'
import FooterMobile from '../components/Mobile/Footer';








import Contact from '../Contact-Us-Form/Contact'








const IBIZAMAIN = () => {
  const theme = useTheme();
  const smallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));


 
  return (
    <div>
     

      {!smallScreen && (
        <div>
         
<Navbar/>
<Hero/>
<SwapDesign/>
<SectionThree/>
<Yield/>
<Defi/>
<Contact/>
        <Footer/>





        </div>
      )}
      {/* This is used For the mobile view Blue print Map*/}
      {smallScreen && (
        <div>
         < MobileNavbar/>
   <HeroMobile/>
<DefiMobile/>
         <Contact/>
<FooterMobile/>
        </div>
      )}
    </div>
  );
};

export default IBIZAMAIN;
