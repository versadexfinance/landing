import React from 'react'
import { Grid } from '@mui/material'
import dum from './images/dum.svg'

function SwapDesign() {
  return (
    <div className='container'>
                 <Grid container >

                 <Grid item md={12} lg={12} xs={12} sm={12}>

               <img src={dum} style={{width:"100%"}}/>


                     </Grid>


                 </Grid>


    </div>
  )
}

export default SwapDesign