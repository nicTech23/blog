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
import SidebarRight from '../../sidebarRight/SidebarRight';

const News = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}}>
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>News</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <NewsBox/>
          </Box>
    

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Crime</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Crime/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Education</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Education/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>International</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <International/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>National</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <National/>
          </Box>
          
          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Polictics</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Polictics/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Regional</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Regional/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Technology</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Technology/>
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default News
