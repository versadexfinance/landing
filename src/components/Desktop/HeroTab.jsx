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
          
            
            <img src={Check} style={{position:"relative" , top:"7rem" , left:"7rem" , width:"170px"}}  data-aos="fade-in" className='vert-move'/>
            <img src={Check2} style={{position:"relative" , top:"13rem" , left:"55rem" , width:"170px"}}  data-aos="fade-in" className='vert-move'/>
        
           <div className="labeltop">
 <div className="htoptab">
    <br/>
 DeFi In Your
 <br />
 Own Way
 </div>
 </div>
 <br/>
 <p className="subtexttab">
 Versadex  is a novel decentralized platform designed around your needs,<br/> leveraging a leading-edge versatile engine to provide a suite of innovative features <br/>for secure, seamless, and efficient financial engagements
 <br/> 


 </p>


 <img src={Check3} style={{position:"relative" , top:"1rem" , left:"14rem" , width:"170px"}} data-aos=""  className='vert-move'/>
            <img src={Check4} style={{position:"relative" , top:"1rem" , left:"47rem" , width:"170px"}} data-aos="" className='vert-move'/>
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