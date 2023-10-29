import React from 'react'
import { Grid } from '@mui/material'
import glow from './images/glow.svg'


import Y1 from './images/Y1.svg'
import Y2 from './images/Y2.svg'
import Y3 from './images/Y3.svg'
import Y4 from './images/Y4.svg'
import Y5 from './images/Y5.svg'
import Y6 from './images/Y6.svg'



function Yield() {
  return (
    <div className='container'>

<br/><br/><br/>
<Grid container className=''>

                               <Grid item lg={12} md={12} xs={12} sm={12}>
                                <div className='centeritall'>     <img src={glow} /></div>
                            
                               <p className="h_testnet">Elevate your DeFi Experience</p>
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
          
          
          
        
          <br/><br/><br/>
                               </Grid>

               </Grid>
               <br/><br/>


               <Grid container spacing={3} >

                               <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                               <img src={Y1}  style={{width:"100%"}}/>
          
          
        
     
                               </Grid>
                               <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                             <img src={Y2}  style={{width:"100%"}}/>
        
        
      
   
                             </Grid>

                             <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                             <img src={Y3} style={{width:"100%"}} />
        
        
      
   
                             </Grid>


                             <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                             <img src={Y4} style={{width:"100%"}} />
        
        
      
   
                             </Grid>



                             <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                             <img src={Y5}  style={{width:"100%"}}/>
        
        
      
   
                             </Grid>


                             <Grid item lg={4} md={4} xs={12} sm={12} className='centeritall'>
                             
                            
                              


   
                             <img src={Y6}  style={{width:"100%"}}/>
        
        
      
   
                             </Grid>

               </Grid>
               <br/> <br/> <br/>
    </div>
  )
}

export default Yield