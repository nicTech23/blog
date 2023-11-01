import React from 'react'
import { Box } from '@mui/material';
import SidebarRight from '../../sidebarRight/SidebarRight';
import { fetchNews } from '../../redux/createSlice/allStoriesSlice';
import StoryTypes from '../storyTypes/StoryTypes';
import Header2 from '../../header/Header2';

const News = () => {
  return (
    <div className=' w-full' sx={{width:"100%"}}>
      <Header2/>
      <Box className =' w-full flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}}>
        <Box className='w-7/12 sm:w-full' sx={{width:{xs:'100%'}}}>
          <StoryTypes fetch={fetchNews} linkNav= '/news/news' storyType='news' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/crime' storyType='crime' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/education' storyType='education' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/international' storyType='international' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/national' storyType='national' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/politics' storyType='politics' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/regional' storyType='regional' storyCategory='news'/>
          <StoryTypes fetch={fetchNews} linkNav= '/news/technology' storyType='technology' storyCategory='news'/>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default News
