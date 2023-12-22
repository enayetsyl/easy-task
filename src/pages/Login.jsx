import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Button, Paper, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { toast } from "react-toastify";

const Login = () => {
const { googleSignIn} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result.user.email)
      if(result.user.email){
        toast.success('Login successfull!', {
          position: 'top-right',
          autoClose: 3000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate(location?.state ? location.state : '/dashboard')
      }
    })
    .catch(error => {
      if(error){
        alert('error Occured')
      }
    })
  }

  // const handleGitHubSignIn = () => {
  //   gitHubSignIn()
  //   .then(result => {
  //     console.log(result)
  //     // if(result.user.email){
  //     //   alert('Login successful')
  //     //   navigate(location?.state ? location.state : '/dashboard')
  //     // }
  //   })
  //   .catch(error => {
  //     if(error){
  //       console.log(error.message)
  //       console.log(error.code)
       
  //     }
  //   })
  // }

  return (
    <Box 
    sx={{
      minHeight:'screen'
    }}
    >
      <Paper elevation={5}
      sx={{
        paddingY: '10px'
      }}
      >
        <Typography 
        variant="h3"
        textAlign='center'
        pb={10}
        >
          Sign in
        </Typography>
        <Typography variant="h6"
        textAlign='center'
        >
        Signin or Register with
        </Typography>
      <Box display='flex'
      justifyContent='center'
      py='10px'
      mb='119px'
      gap='10px'
      >
      <Button sx={{
          textAlign:'center',
          display:'flex',
          justifyContent:'center',
          gap: '5px',
          border: '1px solid black',
          borderRadius: '10px',
          paddingX: '40px',
          ":hover":{
            backgroundColor:'#1976d2',
            color: '#ffffff'
          }
        }}
        onClick={handleGoogleSignIn}
        >
        <GoogleIcon
        
        />
        <Typography variant="h5">Google</Typography>
        </Button>
      {/* <Button sx={{
          textAlign:'center',
          display:'flex',
          justifyContent:'center',
          gap: '5px',
          border: '1px solid black',
          borderRadius: '10px',
          paddingX: '40px',
          ":hover":{
            backgroundColor:'#1976d2',
            color: '#ffffff'
          }
        }}
        onClick={handleGitHubSignIn}
        >
        <GitHubIcon />
        <Typography variant="h5">GitHub</Typography>
        </Button> */}
      </Box>
      </Paper>
    </Box>
  );
};

export default Login;