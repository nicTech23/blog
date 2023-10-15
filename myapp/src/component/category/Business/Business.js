import React from 'react'
import Header2 from '../../header/Header2'
import { Box } from '@mui/material'
import SidebarRight2 from '../../sidebarRight/SidebarRight2'
import Economic from './Economic'
import Energy from './Energy'
import Finance from './Finance'
import Mining from './Mining'
import Investment from './Investment'
import RealEstate from './RealEstate'
import Agric from './Agric'
import Banking from './Banking';
import SidebarRight from '../../sidebarRight/SidebarRight'

const Business = () => {
  return (
    <div className='' sx={{width:"100%"}}>
      <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}} >
        <Box className='w-3/4 sm:w-full' sx={{width:{xs:'100%'}}}>

        <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Economic</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Economic/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Energy</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Energy/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Energy</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Energy/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Mining</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Mining/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>Investment</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Investment/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>RealEstate</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <RealEstate/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Agricbusiness</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Agric/>
          </Box>

          <Box className='mb-10 cursor-pointer' sx={{width:{xs:'100%'}}}>
            <Box className='bg-red-600 p-2 font-sans text-base text-white w-fit text-center' sx={{padding:{xs:'5px'}}}>FootBall</Box>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Banking/>
          </Box>
        </Box>
        <SidebarRight/>
      </Box>
    </div>
  )
}

export default Business
