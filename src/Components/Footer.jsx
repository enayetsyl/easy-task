import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  const [value, setValue] = React.useState('portfolio');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  

  return (
 <Box  sx={{
  borderTop:'2px solid #444',
  display:'flex',
  flexDirection:'column',
  backgroundColor:'#1976D2'
}}>
     <BottomNavigation 
   
    value={value} onChange={handleChange}>

    
        <BottomNavigationAction
        label="Portfolio"
        value="portfolio"
        icon={<Link to={'https://enayet-portfolio.netlify.app/'}><WorkIcon /></Link>}
        />
     
     <BottomNavigationAction
        label="Linkedin"
        value="linkedin"
        icon={<Link to={'https://www.linkedin.com/in/md-enayetur-rahman/'}><LinkedInIcon /></Link>}
      />

      <BottomNavigationAction
        label="Facebook"
        value="facebook"
        icon={<Link to={'https://www.facebook.com/profile.php?id=100094416483981'}><FacebookIcon /></Link>}
      />

     
     <BottomNavigationAction label="Twitter" value="twitter" icon={<Link to={'https://twitter.com/enayetu_syl'}><TwitterIcon /></Link>}
      />

     </BottomNavigation>
   <Typography 
   textAlign='center'
   variant='body2'

   >
     copyright@ Md Enayetur Rahman 01730197620
   </Typography>
 </Box>
  );
};

export default Footer;