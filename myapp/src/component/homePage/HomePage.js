import React from 'react'
import SidebarLeft from './../sidebarLeft/SidebarLeft';
import SidebarRight from './../sidebarRight/SidebarRight';
import Content from '../content/Content'
import { AppBar, Box, Button, Menu, MenuItem, Toolbar } from '@mui/material';
import Fade from '@mui/material/Fade';
import MenuIcon from '@mui/icons-material/Menu';
import Header2 from '../header/Header2';

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
    <Box className=' bg-gray-100' sx={{width:"100%"}}>
      <Header2/>
      <Box className='flex flex-row relative  w-full' sx={{width:"100%", paddingLeft:{xs:"0px", lg:"10rem"}, paddingRight:{xs:"0px", lg:"10rem"} }}>
        <Content/>
        <SidebarRight/>
      </Box>
    </Box>
  )
}

export default HomePage
