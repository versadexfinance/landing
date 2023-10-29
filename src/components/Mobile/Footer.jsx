import React from 'react'
import { Grid } from '@mui/material'

import F1 from './image/f1.svg'
import F2 from './image/f2.svg'
import F3 from './image/f3.svg'
import FooterLogo from './image/Footerlogo.svg'


import Divider from '@mui/material/Divider';




function Footer() {
  return (
    <div className='container'> 
     <br/> <br/><br/>
               <Grid container className='testnet_section'>

                               <Grid item lg={12} md={12} xs={12} sm={12}>

                               <p className="h_testnet_mobile">How to join the Testnet?</p>
                               <br/>


                               <div className="labelp">
 <div className="flexcontainerp">
 <p className="textp">
 <span className="text-wrapperp">
 Particpating in the Testnet is easy!

 </span>
 </p>
 <p className="textp">
 <span className="text-wrapperp">
 Click the button below, bookmark it <br />  and stand ready when the timer finishes counting dow
 </span>
 </p>
 </div>
 </div>
          
          
          
          <div className='centeritall'>


          <div className="header-btn">
 <div className="participate-in">PARTICIPATE IN TESTNET</div>
 </div>

          </div>
          <br/>
                               </Grid>

               </Grid>

      <br/> <br/>
      <Divider className='dividernav' />
      <br/> <br/>
                  <Grid  container>
                  <Grid  item lg={4} xs={12} sm={12} md={4} className='centeritall'>

       <img src={FooterLogo} style={{width:"150px"}} />
                     
</Grid>

<br/> <br/> <br/> <br/>

<Grid  item lg={4} xs={12} sm={12} md={4} className='centeritall'>

  <a href=''>
     <img src={F1} style={{width:"25px"}} /></a>
       
     &nbsp;&nbsp;
         <a href=''>
     <img src={F2} style={{width:"25px"}} /></a>

     &nbsp;&nbsp;
       <a href=''>
     <img src={F3} style={{width:"25px"}} /></a>             
</Grid>
                     
                  </Grid>
                  <br/> <br/>
                  <Divider className='dividernav' />
                  <br/> <br/>
                  <Grid  container>
     
<Grid  item lg={12} xs={12} sm={12} md={4} className='center_footer_side'>

<div className="labels">
 <p className="text-wrappers">VersaDex Copyright 2023. <br/> All Rights Reserved.</p>
 </div>

                     
</Grid>



                     
                  </Grid>
                  <br/> <br/>
    </div>
  )
}

export default Footer