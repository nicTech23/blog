import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material'
import React from 'react'
import { Nav, NavLink, NavLinkLink } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Fade from '@mui/material/Fade';
import Ico from '@mui/icons-material/Search';


const Header2 = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const navbarStyle = ({isActive}) =>{
      return {
        color: isActive ? 'black': 'white'
      }
    }
    
  return (
    <div className='sticky top-0 z-10'>
    <Box className='flex h-14 justify-between w-screen items-center lg:pl-10 lg:pr-10 sm:pl-2 sm:pr-2 mb-5' sx={{background:"red", width:"100%", overflow:'hidden'}}>
    
        <Box className=' w-1/6' sx={{display:{sm:'block', lg:"none"}, width:"10%"}} >
                <Button
                  id="fade-button"
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                <MenuIcon sx={{color:'white'}}/>
                </Button>
                <Menu 
                  id="fade-menu"
                  MenuListProps={{
                    'aria-labelledby': 'fade-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <NavLink to='/'><MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
                  <NavLink to='/news'><MenuItem onClick={handleClose}>News</MenuItem></NavLink>
                  <MenuItem onClick={handleClose}>Sports</MenuItem>
                  <MenuItem onClick={handleClose}>Entertainment</MenuItem>
                  <MenuItem onClick={handleClose}>Business</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
        </Box>

        <div className='1/6'>Logo</div>
        
        <Box className='bg-white rounded-md flex h-8 justify-start items-center text-black w-2/6' 
            sx={{width:{xs:"50%", lg:"384px"}}}>
            <input type='text'  className='text-black w-24 h-6 ml-2 outline-0'/>
            <span  className='cursor-pointer font-bol'>Search</span>
        </Box>

        <Box className='justify-between items-end w-2/6 sm:hidden lg:flex' sx={{display:{xs:'none', lg:'flex'}}}>
            <div className='hover:text-black text-gray-200  flex justify-center items-center text-base font-bold border-l-2 pl-3 '>
                 <NavLink style={navbarStyle} to='/'>Home</NavLink> 
            </div>
            <div className='hover:text-black text-gray-200  flex justify-center items-center text-base font-bold border-l-2 pl-3 '> 
                <NavLink style={navbarStyle}  to='/news'>News</NavLink> 
            </div>
            <div className='hover:text-black text-gray-200  flex justify-center items-center text-base font-bold border-l-2 pl-3 '> 
                <NavLink style={navbarStyle}  to='/business'>Business</NavLink> 
            </div>
            <div className='hover:text-black text-gray-200  flex justify-center items-center text-base font-bold border-l-2 pl-3 '> 
                <NavLink style={navbarStyle}  to='/sports'>Sports</NavLink> 
            </div>
            <div className='hover:text-black text-gray-200  flex justify-center items-center text-base font-bold border-l-2 pl-3 '> 
                <NavLink style={navbarStyle}  to='/entertainment'>Entertainment</NavLink>
            </div>
        </Box>
        
        <Box className='lg-1/6 flex items-end justify-end'>
            icons
        </Box>

    </Box>
    </div>
  )
}

export default Header2
