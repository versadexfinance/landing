import React from 'react'
import { Grid } from '@mui/material'

import Y1 from './image/Ym1.svg'
import Y2 from './image/Ym2.svg'
import Y3 from './image/Ym3.svg'
import Y4 from './image/Ym4.svg'
import Y5 from './image/Ym5.svg'
import Y6 from './image/Ym6.svg'

import T1 from './image/T1.svg'
import T2 from './image/T2.svg'
import T3 from './image/T3.svg'
import T4 from './image/T4.svg'

import Dum from './image/dum_mobile.svg'

import glow from './image/mglow.svg'

import MobileDefi from './image/mobiledefi.svg'
function DefiMobile() {
  return (
    <div className='container'>
<br/><br/>

<Grid container spacing={1}>

<Grid item md={6} sm={12} xs={12} className='centeritall'>
<img src={Dum} style={{width:"100%"}}/>



</Grid>







</Grid>

<br/><br/>
<Grid container className=''>

                               <Grid item lg={12} md={12} xs={12} sm={12}>
                            
                            
                              
                               <br/>


                               <div className="labelp">
 <div className="flexcontainerp">
 <p className="textp">
 <span className="text-wrapperp" style={{color:"#F5FFAB" , fontWeight:"800"}}>
 Whether you're a DEX User, Trader, Liquidity Provider, or Developer, Versadex's<br/> tailored solutions are ready to meet your needs.
 <br />
 </span>
 </p>

 </div>
 </div>
 <br/>

          
        
          <br/>
                               </Grid>

               </Grid>

<br/><br/>


<Grid container spacing={2}>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
<img src={T1} style={{width:"100%"}}/>



</Grid>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
<img src={T2} style={{width:"100%"}}/>



</Grid>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
<img src={T3} style={{width:"100%"}}/>



</Grid>



<Grid item md={4} sm={12} xs={12} className='centeritall'>
<img src={T4} style={{width:"100%"}}/>



</Grid>






</Grid>

<br/>
<Grid container className=''>

                               <Grid item lg={12} md={12} xs={12} sm={12}>
                                <div className='centeritall'>     <img src={glow} style={{width:"100%"}} /></div>
                            
                               <p className="h_testnet_mobile">Elevate your DeFi Experience</p>
                               <br/>


                               <div className="labelp">
 <div className="flexcontainerp">
 <p className="textp">
 <span className="text-wrapperp" style={{color:"#F5FFAB"}}>
 Introducing our game changing features
 <br />
 </span>
 </p>

 </div>
 </div>
          
          
          
        
          <br/>
                               </Grid>

               </Grid>
               <br/><br/>
    <Grid container spacing={2}>

    <Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y1} style={{width:"100%"}}/>



</Grid>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y2} style={{width:"100%"}}/>



</Grid>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y3} style={{width:"100%"}}/>



</Grid>



<Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y4} style={{width:"100%"}}/>



</Grid>



<Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y5} style={{width:"100%"}}/>



</Grid>

<Grid item md={4} sm={12} xs={12} className='centeritall'>
    <img src={Y6} style={{width:"100%"}}/>



</Grid>

<br/>


<Grid item md={4} sm={12} xs={12} className='centeritall'>
<img src={MobileDefi} style={{width:"100%"}}/>



</Grid>
    </Grid>

<br/>


    </div>
  )
}

export default DefiMobile