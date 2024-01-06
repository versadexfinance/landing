import React, { useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
    });
  };
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };


  return (
    <ThemeProvider theme={defaultTheme} className='zzz'>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      
          <Typography component="h1" variant="h5" className='h_testnet'>
          Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
  id="filled-multiline-flexible"
  label={<span>Name <span style={{ color: '#FFD166' }}>*</span></span>}
  multiline
  name='name'
  margin="normal"
  InputProps={{ style: { color: '#797979' } }} // Change text color to green
  color="success"
  fullWidth
  InputLabelProps={{ style: { color: '#797979' } }} // Change label color to green
  variant="filled"
  className='back_of_field'
/>

        
            <TextField
              margin="normal"
          
              fullWidth
              label={<span>Email address <span style={{ color: '#FFD166' }}>*</span></span>}
              variant="filled"
     
              InputProps={{ style: { color: '#797979' } }} // Change text color to green
              className='back_of_field'
              InputLabelProps={{ style: { color: '#797979' } }} // Change label color to green
              color="success"
              name="email"
              autoComplete="email"
              id="email"
             
         
            />
           
           <TextField
        id="message"
       
        multiline
        margin="normal"
        label={<span>Message <span style={{ color: '#FFD166' }}>*</span></span>}
        fullWidth
        
        variant="filled"
        color="success"
        className='back_of_field'
        rows={4}
        value={message}
        InputLabelProps={{ style: { color: '#797979' } }} // Change label color to green
        onChange={handleInputChange}
        InputProps={{ style: { color: '#797979' } }} // Change text color to green
      />
      <br/>  <br/>
            <a
                  type="submit"
                  className='centeritall'
            >
              
              <div className="header-btn">
 <div className="participate-in"   style={{ cursor: 'pointer' }}>SUBMIT</div>
 </div>
            </a>
           
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}