import React from 'react'
import Divider from '@mui/material/Divider';
import Swiper from './Swiper';
import AnimatedPopup from '../Desktop/PopupAnimated';

function HeroMobile() {
  return (
 <div>
 <Divider className='dividernav' />
<div className='container back_of_herom'>
<br/><br/><br/><br/><br/>
<div className="labeltop">
 <div className="htopm">
 DeFi In Your
 <br />
 Own Way!
 </div>
 </div>
 <br/>
 <p className="subtextmm">
 Versadex  is a novel decentralized platform designed your needs , leveraging a leading-edge versatile engine to provide a suite of innovative features for secure, seamless, and efficient financial engagements
 <br/> 
 </p>
 <br/> 
 <div className='centeritall'> <AnimatedPopup/></div>

 <br/> <br/> <br/> 
 <Swiper/>
 <br/> <br/><br/> <br/><br/><br/>
</div>







    </div>
  )
}

export default HeroMobile