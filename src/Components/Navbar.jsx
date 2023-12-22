import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TaskIcon from '@mui/icons-material/Task';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {user, logOut} = React.useContext(AuthContext)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <TaskIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              wordSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Easy-Task
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexDirection: {
                  xs:'column', md:''
                }
              }}
            >
              <MenuItem
              onClick={handleCloseNavMenu}
              >
                <Link to='/'>
                <Typography textAlign='center'
              sx={{
                textTransform: 'capitalize'
              }}
              >Home</Typography>
                </Link>
              </MenuItem>
              <MenuItem
              onClick={handleCloseNavMenu}
              >
               <Link to='/dashboard'>
               <Typography textAlign='center'
              sx={{
                textTransform: 'capitalize',
                ":hover":{
                  borderBottom: "1px solid",
        borderColor: "primary.main", // You can set the color according to your theme
        display: "inline-block", 
                }
              }}
              >Dashboard</Typography>
               </Link>
              </MenuItem>
              <MenuItem
              onClick={handleCloseNavMenu}
              >
               <Link to='/dashboard/add-task'>
               <Typography textAlign='center'
              sx={{
                textTransform: 'capitalize',
                ":hover":{
                  borderBottom: "1px solid",
        borderColor: "primary.main", // You can set the color according to your theme
        display: "inline-block", 
                }
              }}
              >Add Task</Typography>
               </Link>
              </MenuItem>
           
            </Menu>
          </Box>
          <TaskIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              wordSpacing: '.1rem',
              textDecoration: 'none',
            }}
          >
            Easy-Task
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Link to={'/'}>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  Home
              </Button>
          </Link>
          <Link to={'/dashboard'}>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  Dashboard
              </Button>
          </Link>
          <Link to={'/dashboard/add-task'}>
          <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  Add Task
              </Button>
          </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {
                user ? (<Avatar alt="user image" src={user?.photoURL} />) : (
                  <Link to='/login'>
                  <Button variant='contained'
                  onClick={()=> logOut()}
                  >
                    SignIn
                  </Button>
                  </Link>
                )
              }

                
              </IconButton>
            </Tooltip>
            {
              user ? (
                <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}

              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}
              sx={{
                display:'flex',
                flexDirection:'column',
                gap:'5px',
                justifyContent:'start'
              }}
              >
              <Link to='/dashboard'>
              <Typography textAlign="center">
                Dashboard</Typography>
              </Link>
              <Button variant='outlined'
                  onClick={()=> logOut()}
                  >
                    Sign Out
                  </Button>
              </MenuItem>
            </Menu>
              ) : null
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;