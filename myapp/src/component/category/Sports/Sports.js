import React from 'react'
import { Box } from '@mui/material'
import FootBall from './Football'
import Header2 from '../../header/Header2'
import SidebarRight2 from '../../sidebarRight/SidebarRight2'
import Boxing from './Boxing'
import Athletics from './Athletics'
import Tennis from './Tennis'
import Others from './Others'
import SidebarRight from '../../sidebarRight/SidebarRight'

const Sports = () => {
  return (
    <div className='w-full'>
      <Header2/>
      <Box className ='flex flex-row ml-10 mr-10 space-x-4'>
        <Box className='w-3/4 sm:w-full'>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>FootBall</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <FootBall/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Boxing</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Boxing/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>AThletics</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Athletics/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Tennis</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Tennis/>
          </Box>

          <Box className='mb-10 cursor-pointer'> 
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Others</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Others/>
          </Box>
          
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Sports
