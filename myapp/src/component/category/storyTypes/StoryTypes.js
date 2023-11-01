import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import StoryBoxs from '../../storyBox/StoryBoxs'

const StoryTypes = ({linkNav , storyType, fetch, storyCategory}) => {
  return (
        <Box className='mb-10' sx={{width:{xs:'100%'}}}>
            <Link to={linkNav}>
            <Box className='bg-red-600 p-2 font-sans text-base 
            text-white w-fit text-center capitalize' 
            sx={{padding:{xs:'5px'}}}>{storyType}</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            </Link>
      
            <StoryBoxs fetch = {fetch} storyType={storyType} storyCategory={storyCategory}/>
        </Box>
  )
}

export default StoryTypes
