import React from 'react'
import SidebarLeft from './../sidebarLeft/SidebarLeft';
import SidebarRight from './../sidebarRight/SidebarRight';
import Content from '../content/Content'
import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';

const HomePage = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className='' sx={{width:"100%"}}>
      <Box sx={{ flexGrow: 1, position:'relative' }} >
        <AppBar position="sticky" sx={{background:"red", width:"100%", overflow:'hidden'}} >
          <Toolbar className='flex justify-between items-center'>
              <Box sx={{display:{sm:'block', lg:"none"}, width:"20%"}} >
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
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Box>
              <span>Logo</span>
              <Box className='bg-white rounded-md flex justify-start pl-2 pr-3 items-center text-black' sx={{
                width:{xs:"70%", lg:"384px"}
              }}>
                <input type='text'  className='text-black w-80  outline-0'/>
                <span  className='cursor-pointer'>Search</span>
              </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Box className='flex flex-row' sx={{width:"100%", paddingLeft:{xs:"0px", lg:"5rem"}, paddingRight:{xs:"0px", lg:"5rem"} }}>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
      </Box>
    </Box>
  )
}

export default HomePage
