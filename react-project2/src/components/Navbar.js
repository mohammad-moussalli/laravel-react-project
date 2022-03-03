import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";   
import { useHistory } from "react-router-dom";
import { FILL_COLOR } from '../constants/styles';

const Navbar = () => {

const Homepage = <Link to="/" style={{ textDecoration : "None",borderRadius: '8px' }}>Homepage</Link>;
const Dashboard = <Link to="/dashboard"style={{ textDecoration : "None",borderRadius: '8px' }}>Dashboard</Link>;
const AboutUs = <Link to="/about-us"style={{ textDecoration : "None",borderRadius: '8px' }}>About Us</Link>;
const Services = <Link to="/services"style={{ textDecoration : "None",borderRadius: '8px' }}>Services</Link>;
const LoginSignup = <Link to="/login-signup"style={{ textDecoration : "None",borderRadius: '8px' }}>Login/Signup</Link>;
const Logout = <Button  className='Button' variant="text" style={{backgroundColor:'wheat', borderRadius:'10px', color:'#333'}} onClick ={() => clearLocalStorage()}>Logout</Button>


let pages = [];
let settings = [];
if (localStorage.getItem('token') !== null) {
    pages = [Homepage, Dashboard, AboutUs, Services];
    settings = [Logout];
}else{
    pages = [Homepage, AboutUs, Services];
    settings = [LoginSignup];
}

const history = useHistory();
function clearLocalStorage(){
    localStorage.clear();
    history.push('/login-signup');
    window.location.reload();
}
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
      <AppBar position="static">
        <Container maxWidth="xl" style={{backgroundColor:FILL_COLOR}}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <h3>Laravel/React Project</h3>
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
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <h3>Laravel/React Project</h3>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
                {settings}
          </Toolbar>
        </Container>
      </AppBar>
  );
};
export default Navbar;
