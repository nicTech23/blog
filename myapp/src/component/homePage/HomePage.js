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
    <Box className='' sx={{width:"100%"}}>
      <Header2/>
      <Box className='flex flex-row relative' sx={{width:"100%", paddingLeft:{xs:"0px", lg:"5rem"}, paddingRight:{xs:"0px", lg:"5rem"} }}>
        <SidebarLeft/>
        <Content/>
        <SidebarRight/>
      </Box>
    </Box>
  )
}

export default HomePage
