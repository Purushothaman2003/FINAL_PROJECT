import React from 'react'
import { Link } from "react-router-dom";
import './Login.css';
import { Box, Button, Checkbox, Container, CssBaseline, FormControl, FormControlLabel, IconButton, Input, InputAdornment, InputLabel, TextField } from '@mui/material';
import { AccountCircle, CenterFocusStrong } from '@mui/icons-material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


function Login() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      {/* <CssBaseline />
      <Container >
    <Box sx={{ bgcolor: '#cfe8fc#ee9ca7 → #ffdde1', height: '90vh',width:'70vh' }} > */}
   
    <div className='container'>
    <center>
          <div className='user'>
          <TextField
        id="input-with-sx"
        placeholder="username or email"
        color="secondary"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
               <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        
      </Box>
            </InputAdornment>
          ),
        }}
        variant="standard"
        />
        </div>
        <div className='pass'>
        <FormControl   >
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            color="secondary"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br/>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
        </FormControl>
        </div>
<Button variant="contained" href="/">Login</Button>
<br/><br/>
<p>Don't have a account?<Link to="/reg">Register</Link> </p>
         </center>
        </div>
      


    </>
  )
}
export default Login;




