import React from 'react'
import { Box } from '@mui/material';
import SidebarRight from '../../sidebarRight/SidebarRight';
import { fetchEntertainment } from '../../redux/createSlice/allStoriesSlice';
import StoryBoxs from '../../storyBox/StoryBoxs';

const Entertainment = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Movie</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchEntertainment} storyType='movie' storyCategory='entertainment'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Music</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchEntertainment} storyType='music' storyCategory='entertainment'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>RadioTV</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchEntertainment} storyType='radio' storyCategory='entertainment'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Stage</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchEntertainment} storyType='stage' storyCategory='entertainment'/>  
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Entertainment
