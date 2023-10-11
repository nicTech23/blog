import React from 'react'
import SidebarLeft from './../sidebarLeft/SidebarLeft';
import SidebarRight from './../sidebarRight/SidebarRight';
import Content from '../content/Content'
import Header from '../header/Header'
import { Box } from '@mui/material';

const HomePage = () => {
  return (
    <Box className='flex ml-28 mr-28'>
      <SidebarLeft/>
      <Box className='flex flex-col w-10/12 '>
        <Header/>
        <Box className='flex w-full'>
          <Content/>
          <SidebarRight/>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage
