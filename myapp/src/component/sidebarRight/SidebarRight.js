import { Box, Typography } from '@mui/material'
import React from 'react'

const sidebarRight = () => {
  return (
    <Box className='w-3/12 pl-5 pt-5 border-l-2 h-screen bg-gray-100 mt-5' sx={{display:{xs:'none', lg:'block'}}}>
      <Typography>Most view stories </Typography>
    </Box>
  )
}

export default sidebarRight
