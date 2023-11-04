import React from 'react'
import MostStories from '../mostSories/MostStories'
import { Box } from '@mui/material'


const Content = () => {

  return (
      <Box className='w-7/12 bg-white border-l-2 h-screen p-5'sx={{width:{xs:'100%', lg:'75%'}}}>
        <MostStories/>
      </Box>
  )
}

export default Content
