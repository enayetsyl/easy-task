import { Link } from 'react-router-dom';
import image from '../assets/banner.jpg'
import { Box, Button, Container } from "@mui/material";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Banner = () => {
  const {user} = useContext(AuthContext)
  console.log('user from banner', user)
  return (
    <Box position='relative'>
      <Container >
      <Box
      position='relative'
      >
      <img src={image} alt="banner-image" 
        className='max-h-screen object-fit min-w-full'
        />
        </Box> 
      <Box 
      sx={{
        position: 'absolute',
        top: '23%',
        left:'50%',
        transform:'translate(-50%, -50%)'
      }}
      >
        {
          user ? ( <Link to={'/dashboard'}>
          <Button variant='contained'
          sx={{
            backgroundColor:'white',
            color:'black',
          }}
          >Let's Explore</Button>
          </Link>) : (
            <Link to={'/login'}>
        <Button variant='contained'
        sx={{
          backgroundColor:'white',
          color:'black',
        }}
        >Let's Explore</Button>
        </Link>
          )
        }
      </Box>
      </Container>
    </Box>
  );
};

export default Banner;
