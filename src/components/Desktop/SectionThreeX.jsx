import React from 'react'
import './three.css'
import { Grid } from '@mui/material'
import user from './images/usersn.svg'

import traders from './images/traders.png'

import liquidity from './images/liquidityprovidersn.svg'

import developers from './images/developers.png'



function SectionThree() {
  return (
    <div className='contianer '>
<div className="frame centeritall"><br/>
      <div className="subhead">
        <p className="subtext" style={{ fontWeight:"700"}}>
        Whether you're a DEX User, Trader, Liquidity Provider, or Developer, <br/>Versadex's tailored solutions are ready to meet your needs.
        </p>

      </div>
  
    </div> <br/>
    <div className='container'>

    <Grid container spacing={2}>

<Grid item md={5} lg={5}>
  <img src={user} style={{width:"100%" , height:"100%" , position:"relative" , top:"0px"} }/>


    
</Grid>
<Grid item md={7} lg={7}>
  <img src={traders} style={{width:"100%" , height:"100%"}}/>


    
</Grid>
<Grid item md={7} lg={7}>
  <img src={liquidity} style={{width:"100%" , height:"100%" }}/>


    
</Grid>
<Grid item md={5} lg={5}>
  <img src={developers} style={{width:"100%" , height:"95%" , position:"relative" , top:"12px"}}/>


    
</Grid>

</Grid>


    </div>


    </div>
  )
}

export default SectionThree