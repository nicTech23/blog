import React from 'react'
import { Box } from '@mui/material';
import SidebarRight from '../../sidebarRight/SidebarRight';
import { fetchEntertainment } from '../../redux/createSlice/allStoriesSlice';
import StoryBoxs from '../../storyBox/StoryBoxs';
import StoryTypes from '../storyTypes/StoryTypes';
import Header2 from '../../header/Header2';

const Entertainment = () => {
  return (
    <div className=' w-full' sx={{width:"100%"}}>
      <Header2/>
      <Box className =' w-full flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-7/12 sm:w-full' sx={{width:{xs:'100%'}}}>
          <StoryTypes fetch={fetchEntertainment} linkNav= '/entertainment/movie' storyType='movie' storyCategory='entertainment'/>
          <StoryTypes fetch={fetchEntertainment} linkNav= '/entertainment/music' storyType='music' storyCategory='entertainment'/>
          <StoryTypes fetch={fetchEntertainment} linkNav= '/entertainment/radio' storyType='radio' storyCategory='entertainment'/>
          <StoryTypes fetch={fetchEntertainment} linkNav= '/entertainment/stage' storyType='stage' storyCategory='entertainment'/>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Entertainment
