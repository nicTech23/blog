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
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Movie</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Movie/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Music</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Music/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>RadioTV</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <RadioTV/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Stage</Box>
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
