import { Box } from '@mui/material'
import React, { useState } from 'react'

const SidebarLink = ({icon, text}) => {
   
  return (
    <Box className='
        flex transition ease-in delay-0 mb-5 justify-start
        items-center hover:bg-gray-200 
        rounded-lg p-1 w-fit cursor-pointer'>
      {icon}
      <span className='font-sans text-lg ml-4'>{text}</span>
    </Box>
  )
}

export default SidebarLink
