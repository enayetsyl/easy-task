import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import image from '../assets/banner.jpg'
import { Box, Button, Container } from "@mui/material";
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const buttonVariants = {
 
visible: {opacity: 1},
hidden: {opacity: 0},
}


const Banner = () => {
  const {user} = useContext(AuthContext)
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
          
          <motion.button
          className='bg-[#1976d2] text-white py-2 px-4 rounded-lg '
          variants={buttonVariants}
            initial= 'hidden'
            animate='visible'
            transition={{duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}

          >Let's Explore</motion.button>

          </Link>) : (
            <Link to={'/login'}>
       
          <motion.button
          className='bg-[#1976d2] text-white py-2 px-4 rounded-lg '
          variants={buttonVariants}
            initial= 'hidden'
            animate='visible'
            transition={{duration: 0.8, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut'}}

          >Let's Explore</motion.button>
        
        </Link>
          )
        }
      </Box>
      </Container>
    </Box>
  );
};

export default Banner;
