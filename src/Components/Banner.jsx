import { motion } from 'framer-motion';
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
          
          <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.8 }}
          whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
          >
          <Button variant='contained'
          sx={{
            backgroundColor:'white',
            color:'black',
          }}
          >Let's Explore</Button>
          </motion.div>

          </Link>) : (
            <Link to={'/login'}>
        <motion.div
         initial={{ opacity: 0, y: -50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2.8 }}
         whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}
        >
        <Button variant='contained'
        sx={{
          backgroundColor:'white',
          color:'black',
        }}
        >Let's Explore</Button>
        </motion.div>
        </Link>
          )
        }
      </Box>
      </Container>
    </Box>
  );
};

export default Banner;
