import React from 'react'
import Header2 from '../../header/Header2'
import { Box } from '@mui/material'
import SidebarRight from '../../sidebarRight/SidebarRight'
import StoryBoxs from '../../storyBox/StoryBoxs'
import { fetchBusiness } from '../../redux/createSlice/allStoriesSlice'
import { linkNav } from 'react-router-dom'
import StoryTypes from '../storyTypes/StoryTypes'

const Business = () => {
  return (
    <div className='w-full' sx={{width:"100%"}}>
      <Header2/>
      <Box className =' w-full flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-7/12 sm:w-full' sx={{width:{xs:'100%'}}}>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/economic' storyType='economic' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/energy' storyType='energy' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/finace' storyType='finance' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/mining' storyType='mining' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/intertainment' storyType='intertainment' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/realestate' storyType='realestate' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/agricultural' storyType='agricultural' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/agricultural' storyType='agricultural' storyCategory='business'/>
          <StoryTypes fetch={fetchBusiness} linkNav= '/business/banking' storyType='banking' storyCategory='business'/>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Business
