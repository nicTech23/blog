import React from 'react'
import { Box } from '@mui/material'
import FootBall from './Football'
import Header2 from '../../header/Header2'
import Boxing from './Boxing'
import Athletics from './Athletics'
import Tennis from './Tennis'
import Others from './Others'
import SidebarRight from '../../sidebarRight/SidebarRight'

const Sports = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Header2/>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>FootBall</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <FootBall/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Boxing</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Boxing/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>AThletics</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Athletics/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Tennis</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Tennis/>
          </Box>

          <Box className='mb-10 cursor-pointer'> 
            <div className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Others</div>
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
