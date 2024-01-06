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
    
    <div className='container  hero_section_bg'>
<br/><br/>
 
           <Grid container spacing={1}>
           <Grid item md={3} lg={3}>
          
            
          <img src={Check} style={{ width:"210px"}}  data-aos="fade-in" className='vert-move liqudity'/>
          <img src={Check2} style={{ width:"210px"}}  data-aos="fade-in" className='vert-move ai_trad'/>
      



<br/> <br/> <br/> <br/><br/><br/><br/>
</Grid>
<Grid item md={6} lg={6}>
          
        
      
         <div className="labeltop">
          <br/><br/><br/>
<div className="htop">
DeFi In Your
<br />
Own Way
</div>
</div>
<br/> 
<p className="subtext">
Versadex  is a novel decentralized platform designed around your needs, leveraging a leading-edge versatile engine to provide a suite of innovative features for secure, seamless, and efficient financial engagements
<br/> 
<br/> 

</p>
<a
                type="submit"
                className='centeritall'
          >
            <AnimatedPopup/>
 
          </a>



<br/> <br/> <br/> <br/><br/><br/><br/>
</Grid>
           <Grid item md={3} xs={12} lg={3}>
          
            
         
        

 <img src={Check3} style={{ width:"210px"}} data-aos=""  className='vert-move trade_ai'/>
            <img src={Check4} style={{ width:"210px"}} data-aos="" className='vert-move dev_ai'/>

 

</Grid>


           </Grid>




         
    </div>
   
    </div>
  )
}

export default Hero