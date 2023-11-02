import React from 'react'
import { Grid } from '@mui/material'
import FooterLogo from './images/Footerlogo.svg'
import F1 from './images/f1.svg'
import F2 from './images/f2.svg'
import F3 from './images/f3.svg'

import Divider from '@mui/material/Divider';




function Footer() {
  return (
    <div > 
     <br/> <br/><br/>
               <Grid container className='testnet_section'>

                               <Grid item lg={12} md={12} xs={12} sm={12}>
                               <br/><br/>
                               <p className="h_testnet">How to join the Testnet?</p>
                               <br/>


                               <div className="labelp">
 <div className="flexcontainerp">
 <p className="textp">
 <span className="text-wrapperp">
 Particpating in the Testnet is easy! <br/>

 Click the button below, bookmark it and stand ready when the timer finishes counting dow
 <br />
 </span>
 </p>

 </div>
 </div>
          
          
          
          <div className='centeritall'>


          <div className="header-btn">
 <div className="participate-in"   style={{ cursor: 'pointer'  }}>JOIN</div>
 </div>

          </div>
          <br/><br/><br/>
                               </Grid>

               </Grid>

      <br/> <br/>
      <Divider className='dividernav' />
      <br/> <br/>
                  <Grid  container>
                  <Grid  item lg={4} xs={12} sm={12} md={4} className='left_footer_side'>

       <img src={FooterLogo} style={{width:"150px"}} />
                     
</Grid>
<Grid  item lg={4} xs={12} sm={12} md={4} className='center_footer_side'>

<a href='' style={{textDecoration:"none"}}>
<div className="label">
 <div className="text-wrapper">Testnet</div>
 </div></a>
       
   

                     
</Grid>


<Grid  item lg={4} xs={12} sm={12} md={4} className='right_footer_side'>

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
 <p className="text-wrappers">VersaDex Copyright 2023. All Rights Reserved.</p>
 </div>

                     
</Grid>



                     
                  </Grid>
                  <br/> <br/>
    </div>
  )
}

export default Footer