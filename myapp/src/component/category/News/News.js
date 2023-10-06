import React from 'react'
import Header2 from '../../header/Header2'
import { Box, CardMedia } from '@mui/material';
import SidebarRight2 from '../../sidebarRight/SidebarRight2';
import NewsBox from './NewsBox';
import Crime from './Crime';
import Education from './Education';
import International from './International';
import National from './National';
import Polictics from './Polictics';
import Regional from './Regional';
import Technology from './Technology';

const News = () => {
  return (
    <div className=''>
      <Header2/>
      <Box className ='flex  flex-row ml-10 mr-10 space-x-4'>
        <Box className='w-3/4'>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>News</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <NewsBox/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Crime</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Crime/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Education</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Education/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>International</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <International/>
          </Box>

          <Box className='mb-10 cursor-pointer'> 
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>National</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <National/>
          </Box>
          
          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Politics</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Polictics/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Regional</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Regional/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Technology</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Technology/>
          </Box>
        </Box>
        <SidebarRight2/>
      </Box>
    </div>
  )
}

export default News
