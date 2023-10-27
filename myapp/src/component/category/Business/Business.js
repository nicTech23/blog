import React from 'react'
import Header2 from '../../header/Header2'
import { Box } from '@mui/material'
import SidebarRight from '../../sidebarRight/SidebarRight'
import StoryBoxs from '../../storyBox/StoryBoxs'
import { fetchBusiness } from '../../redux/createSlice/allStoriesSlice'

const Business = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

        <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Economic</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='economic' storyCategory='business'/>
          </Box>

         

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Energy</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='energy' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Finance</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='finance' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Mining</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='mining' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Investment</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='intertainment' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>RealEstate</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='realestate' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Agricbusiness</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='agricultural' storyCategory='business'/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Banking</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <StoryBoxs fetch = {fetchBusiness} storyType='banking' storyCategory='business'/>
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Business
