import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarLink = ({icon, text, link}) => {
   
  return (
    <Link to={link}>
    <Box className='
        flex transition ease-in delay-0 mb-5 justify-start
        items-center hover:bg-gray-200 
        rounded-lg p-1 w-fit cursor-pointer'>
      {icon}
      <span className='font-sans text-lg ml-4'>{text}</span>
    </Box>
    </Link>
  )
}

export default SidebarLink
