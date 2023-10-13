import React from 'react'
import { Box } from '@mui/material';
import Header2 from '../../header/Header2';
import Movie from './Movie';
import Music from './Music';
import RadioTV from './RadioTV';
import Stage from './Stage';
import SidebarRight from '../../sidebarRight/SidebarRight';

const Entertainment = () => {
  return (
    <div className=''>
      <Header2/>
      <Box className ='flex  flex-row ml-10 mr-10 space-x-4'>
        <Box className='w-3/4'>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Movie</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Movie/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Music</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Music/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Radio & TV</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <RadioTV/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Tennis</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Stage/>
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Entertainment
