import React, {useState} from 'react';

import { Grid } from '@mui/material';
import Check from './images/check.svg'
import Check2 from './images/check2.svg'
import Check3 from './images/check3.svg'
import Check4 from './images/check4.svg'
import AnimatedPopup from './PopupAnimated';

import Divider from '@mui/material/Divider';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  duration: 1200
});

function Hero() {

  return (
    <div> <Divider className='dividernav' />
    
    <div className='hero_section_bg'>

 
           <Grid container spacing={1}>

           <Grid item md={12} xs={12} lg={12}>
            <br/> <br/>
            
            <img src={Check} style={{position:"relative" , top:"10px" , left:"150px"}}  data-aos="fade-in" className='vert-move'/>
            <img src={Check2} style={{position:"relative" , top:"250px" , left:"940px"}}  data-aos="fade-in" className='vert-move'/>
          
           <div className="labeltop">
 <div className="htop">
 DeFi In Your
 <br />
 Own Way!
 </div>
 </div>
 <br/> <br/>
 <p className="subtext">
 Discover VersaDex, a decentralized platform built around YOU, powered by <br/> a pioneering Web3 e
 suite of innovative features, ensuring secure,  <br/>seamless, and efficient financial interaction
 </p>
 <br/> <br/>

 <img src={Check3} style={{position:"relative" , top:"10px" , left:"200px"}} data-aos="fade-in"  className='vert-move'/>
            <img src={Check4} style={{position:"relative" , top:"20px" , left:"820px"}} data-aos="fade-in" className='vert-move'/>
 <a
                  type="submit"
                  className='centeritall'
            >
              <AnimatedPopup/>
   
            </a>
 
 <br/> <br/> <br/> <br/><br/><br/><br/>
</Grid>


           </Grid>




         
    </div>
   
    </div>
  )
}

export default Hero