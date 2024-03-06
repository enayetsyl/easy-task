import team1 from '../assets/team-1.jpg'
import team2 from '../assets/team-2.jpg'
import team3 from '../assets/team-3.jpg'
import team4 from '../assets/team-4.jpg'
import team5 from '../assets/team-5.jpg'
import team6 from '../assets/team-6.jpg'
import team7 from '../assets/team-7.jpg'
import team8 from '../assets/team-8.jpg'
import team9 from '../assets/team-9.jpg'
import team10 from '../assets/team-10.jpg'
import team11 from '../assets/team-11.jpg'
import team12 from '../assets/team-12.jpg'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container, Typography } from '@mui/material';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const itemData = [
  {
    img: team1,
    title: 'Bed',
  },
  {
    img: team2,
    title: 'Books',
  },
  {
    img: team3,
    title: 'Sink',
  },
  {
    img: team4,
    title: 'Kitchen',
  },
  {
    img: team5,
    title: 'Blinds',
  },
  {
    img: team6,
    title: 'Chairs',
  },
  {
    img: team7,
    title: 'Laptop',
  },
  {
    img: team8,
    title: 'Doors',
  },
  {
    img: team9,
    title: 'Coffee',
  },
  {
    img: team10,
    title: 'Storage',
  },
  {
    img: team11,
    title: 'Candle',
  },
  {
    img: team12,
    title: 'Coffee table',
  },
];

const AboutUs = () => {
  return (
   <>
   <Container maxWidth='xl'>
{/* heading */}
<Typography variant="h2" align="center" fontWeight='bold' pt={10} >About Us</Typography>
{/* first part */}
  <Box 
  pt={8}
  sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:{xs:'column', md: 'row'},
    gap:'40px'
  }} >
    {/* left box */}
    <Box
    sx={{
      width:{xs: 'full', md:'1/2'},
    }}
    >
      <Typography variant='h4' py={4}>Crafting Excellence in Task Management</Typography>
      <Typography>Welcome to our corner of the digital world, where innovation meets efficiency, and task management transforms into a personalized journey. At Easy Task, we're not just a task management platform; we're a team of passionate individuals dedicated to empowering users like you to conquer their to-do lists seamlessly.</Typography>
      </Box>
    {/* right box */}
    <Box
    sx={{
      width:{xs: 'full', md:'1/2'}
    }}
    >
      <Typography variant='h4' py={4} 
      sx={{marginTop:{xs:'1px', md:'100px'}}}
      >Our Story</Typography>
      <Typography>Founded in 1970, our journey began with a simple yet powerful idea — to create a task management solution that marries functionality with user-friendliness. Fueled by a collective desire to streamline productivity, our team embarked on a mission to redefine the way individuals and teams approach task organization. Today, Easy Task stands as a testament to the commitment of turning that vision into reality.</Typography>
      </Box>

  </Box>
  {/* second part */}
    <Box sx={{
      display: 'flex',
      justifyContent: 'between',
      alignItems: 'center',
      flexDirection:{xs:'column-reverse', md: 'row'},
      gap:'40px',
      marginTop: '100px'
    }}>
       {/* image colag */}
       <Box sx={{width:{sx:'full',sm: 'full', md:'50%', lg:'50%', xl:'50%'}, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData?.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    <Box sx={{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      width:{xs:'full',sm: 'full', md:'50%', lg:'50%', xl:'50%'},
      gap:'20px'
    }}>
      <KeyboardDoubleArrowLeftIcon
      sx={{display: {xs:'none', sm: 'none', md:'flex', lg: 'flex', xl:'flex'},
    fontSize:'80px'
    }}
      />
      <KeyboardDoubleArrowDownIcon
      sx={{
        display:{xs:'visible', sm:'visible', md:'none', lg:'none', xl:'none'},
        fontSize:'80px'
      }}
      />
      <Typography variant='h2' textAlign='center'>Meet Our Team</Typography>
    </Box>
    </Box>

    {/* Third part */}
    <Box 
    pt={8}
    sx={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:{xs:'column', md: 'row'},
    gap:'40px',
  }}>
       {/* left box */}{}
    <Box
    sx={{
      width:{xs: 'full', md:'1/2'},
      marginTop:{xs:'1px', md:'120px'}
    }}
    
    >
      <Typography variant='h4' py={4}>Our Mission:</Typography>
      <Typography>At the core of our existence is a mission to simplify your work life. We believe that effective task management shouldn't be a cumbersome process but a fluid and rewarding experience. Our platform is meticulously designed to provide you with the tools you need to navigate your tasks effortlessly, foster collaboration, and achieve your goals with unparalleled efficiency.</Typography>
      </Box>
    {/* right box */}
    <Box
    sx={{
      width:{xs: 'full', md:'1/2'}
    }}
    >
      <Typography variant='h4' py={4} 
      
      >Why Choose Us:</Typography>
      <Typography>Beyond the lines of code and the sleek interface lies a commitment to excellence and a dedication to user satisfaction. We don't just create software; we craft experiences. Choosing Easy Task means choosing a partner in your journey to productivity. It's about embracing a platform that understands your needs, grows with you, and continually evolves to meet the demands of the dynamic work landscape.</Typography>
      </Box>
    </Box>
   </Container>
   </>
  )
}

export default AboutUs