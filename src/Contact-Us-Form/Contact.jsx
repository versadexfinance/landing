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
      Contact us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
          id="filled-multiline-flexible"
          label="Full Name"
          multiline
          name='name'
          margin="normal"
          InputProps={{ style: { color: 'green' } }} // Change text color to green
          color="success"
          required
          fullWidth
          InputLabelProps={{ style: { color: 'green' } }} // Change label color to green
          variant="filled"
          className='back_of_field'
        />
        
            <TextField
              margin="normal"
              required
              fullWidth
              variant="filled"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
          
              color="success"
              InputProps={{ style: { color: 'green' } }} // Change text color to green
                  className='back_of_field'
                  InputLabelProps={{ style: { color: 'green' } }} // Change label color to green
            />
           
           <TextField
        id="message"
        label="Message"
        multiline
        margin="normal"
        required
        fullWidth
        
        variant="filled"
        color="success"
        className='back_of_field'
        rows={4}
        value={message}
        InputLabelProps={{ style: { color: 'green' } }} // Change label color to green
        onChange={handleInputChange}
        InputProps={{ style: { color: 'green' } }} // Change text color to green
      />
      <br/>  <br/>
            <a
                  type="submit"
                  className='centeritall'
            >
              
              <div className="header-btn">
 <div className="participate-in">Send Email</div>
 </div>
            </a>
           
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}