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
 <br/> <br/>
 <p className="subtextmm">
 Versadex  is a novel decentralized platform designed around YOU, leveraging a leading-edge versatile engine to provide a suite of innovative features <br/>for secure, seamless, and efficient financial engagements
 <br/> <br/>
Whether you're a DEX User, Trader, Liquidity Provider, or Developer, Versadex's tailored solutions are ready to meet your needs.
Have it your way, the time is NOW!
 </p>
 <br/> <br/>
 <div className='centeritall'> <AnimatedPopup/></div>

 <br/> <br/> <br/> <br/><br/>

 <Swiper/>
 <br/> <br/><br/> <br/><br/><br/>
</div>







    </div>
  )
}

export default HeroMobile