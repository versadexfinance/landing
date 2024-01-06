import React from "react";
import { useMediaQuery } from "@mui/material";

import Navbar from "../Navbar/Navbar";
import TabNavbar from "../Navbar/TabNavbar";
import Hero from "../components/Desktop/Hero";
import HeroTab from "../components/Desktop/HeroTab";
import SwapDesign from "../components/Desktop/SwapDesign";
import SectionThree from "../components/Desktop/SectionThreeX";
import Footer from "../components/Desktop/Footer";
import Defi from '../components/Desktop/FooterX'
import Yield from '../components/Desktop/Yield'


import Contact from '../Contact-Us-Form/Contact'


import MobileNavbar from "../Navbar/MobileNavbar";
import HeroMobile from "../components/Mobile/HeroMobile";
import DefiMobile from '../components/Mobile/DefiMobile'
import FooterMobile from '../components/Mobile/Footer';

import FooterTab from '../components/Desktop/FooterTab';
function YourComponent() {
  // Define your custom breakpoints
  const LargedesktopBreakpoint = useMediaQuery("(min-width: 3000px)");
  const desktopBreakpoint = useMediaQuery("(min-width: 1450px)");
  const tabletBreakpoint = useMediaQuery("(max-width: 1449px) and (min-width: 1100px)");
  const mobileBreakpoint = useMediaQuery("(max-width: 1099px)");

  return (
    <div>
      {desktopBreakpoint && (
        <div>
          {/* Content for desktop view */}
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
      {tabletBreakpoint && (
        <div>
          {/* Content for tablet view */}
          <TabNavbar/>
          <HeroTab/>
          <SwapDesign/>
          <SectionThree/>
          <Yield/>
<Defi/>
<Contact/>
<FooterTab/>
        </div>
      )}
      {mobileBreakpoint && (
        <div>
          {/* Content for mobile view */}
          <MobileNavbar/>
<HeroMobile/>
<DefiMobile />
<Contact/>
<FooterMobile />

        </div>
      )}
      
    </div>
  );
}

export default YourComponent;
