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
 Discover VersaDex, a decentralized platform built around YOU, powered by  a pioneering Web3 e
 suite of innovative features, ensuring secure, seamless, and efficient financial interaction
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