import React from 'react'
import { Box } from '@mui/material';
import SidebarRight from '../../sidebarRight/SidebarRight';
import StoryBoxs from '../../storyBox/StoryBoxs';
import { fetchNews } from '../../redux/createSlice/allStoriesSlice';

const News = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}}>
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>News</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='news' storyCategory='news'/>
          </Box>
    
          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Crime</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='crime' storyCategory='news'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Education</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='education' storyCategory='news'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>International</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='international' storyCategory='news'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>National</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='national' storyCategory='news'/>
          </Box>
          
          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Polictics</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='politics' storyCategory='news'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Regional</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='regional' storyCategory='news'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Technology</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchNews} storyType='technology' storyCategory='news'/>
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default News
