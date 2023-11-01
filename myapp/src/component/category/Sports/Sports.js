import React from 'react'
import { Box } from '@mui/material'
import SidebarRight from '../../sidebarRight/SidebarRight'

import { fetchSport } from '../../redux/createSlice/allStoriesSlice'
import StoryTypes from '../storyTypes/StoryTypes'
import Header2 from '../../header/Header2'


const Sports = () => {
  return (
    <div className='w-full' sx={{width:"100%"}}>
      <Header2/>
      <Box className ='flex w-full flex-row pr-5 pl-5 space-x- w-w-7/12' sx={{width:"100%"}} >
        <Box className='w-7/12 sm:w-full' sx={{width:{xs:'100%'}}}>
          <StoryTypes fetch={fetchSport} linkNav= '/sports/football' storyType='football' storyCategory='sports'/>
          <StoryTypes fetch={fetchSport} linkNav= '/sports/boxing' storyType='boxing' storyCategory='sports'/>
          <StoryTypes fetch={fetchSport} linkNav= '/sports/athletics' storyType='athletics' storyCategory='sports'/>
          <StoryTypes fetch={fetchSport} linkNav= '/sports/tennis' storyType='tennis' storyCategory='sports'/>
          <StoryTypes fetch={fetchSport} linkNav= '/sports/others' storyType='others' storyCategory='sports'/>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Sports
