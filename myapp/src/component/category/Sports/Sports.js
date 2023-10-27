import React from 'react'
import { Box } from '@mui/material'
import SidebarRight from '../../sidebarRight/SidebarRight'
import StoryBoxs from '../../storyBox/StoryBoxs'

import { fetchSport } from '../../redux/createSlice/allStoriesSlice'


const Sports = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>FootBall</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchSport} storyType='football' storyCategory='sports'/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Boxing</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchSport} storyType='boxing' storyCategory='sports'/> 
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>AThletics</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchSport} storyType='athletics' storyCategory='sports'/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Tennis</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchSport} storyType='tennis' storyCategory='sports'/>
          </Box>

          <Box className='mb-10 cursor-pointer'> 
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Others</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchSport} storyType='others' storyCategory='sports'/>
          </Box>

        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Sports
