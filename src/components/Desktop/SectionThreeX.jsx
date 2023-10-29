import React from 'react'
import './three.css'
import { Grid } from '@mui/material'
import user from './images/users.svg'

import traders from './images/traders.svg'

import liquidity from './images/liquidity providers.svg'

import developers from './images/developers.svg'



function SectionThree() {
  return (
    <div className='contianer '>
<div className="frame centeritall">
      <div className="subhead">
        <p className="subtext">
          Whether you&#39;re a DEX User, Trader, Liquidity Provider, or Developer, VersaDex&#39;s tailored solutions are<br />
          ready to meet your needs. Your personalized DeFi journey awaits; the time to explore is NOW!
        </p>
        <p className="h">Have it your way, the time is NOW!</p>
      </div>
  
    </div> <br/>
    <div className='container'>

    <Grid container spacing={2}>

<Grid item md={5} lg={5}>
  <img src={user} style={{width:"100%" , height:"100%"}}/>


    
</Grid>
<Grid item md={7} lg={7}>
  <img src={traders} style={{width:"100%" , height:"100%"}}/>


    
</Grid>
<Grid item md={7} lg={7}>
  <img src={liquidity} style={{width:"100%" , height:"100%"}}/>


    
</Grid>
<Grid item md={5} lg={5}>
  <img src={developers} style={{width:"100%" , height:"100%"}}/>


    
</Grid>

</Grid>


    </div>


    </div>
  )
}

export default SectionThree