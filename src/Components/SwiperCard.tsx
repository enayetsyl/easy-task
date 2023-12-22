import { Box, Typography } from "@mui/material";
import React from 'react';

interface Review {
  image: string;
  name: string;
  review: string;

}

const SwiperCard: React.FC<{review: Review}> = ({review}) => {
  return (
   <div>
    <Box 
    sx={{
      display:'flex',
      flexDirection:'column',
      gap:'10px',
      alignItems: 'center',
      justifyContent: 'center',
         }}
    >
    <img src={review.image} alt="" 
        style={{ height: '40px', width: '40px', borderRadius: '50%' }}
        />
        <Typography
        variant="h5"
     
        >{review.name}</Typography>
        <Typography
        variant="body1"
        sx={{
          width: '80%'
        }}
        >{review.review}</Typography>
    </Box>

   </div>
  );
};

export default SwiperCard;