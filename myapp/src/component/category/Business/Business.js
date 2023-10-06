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

const Business = () => {
  return (
    <div className=''>
      <Header2/>
      <Box className ='flex  flex-row ml-10 mr-10 space-x-4'>
        <Box className='w-3/4'>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Economy</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Economic/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Energy</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Energy/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Finance</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Finance/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Mining</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Mining/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Investment</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Investment/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Real Estate</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <RealEstate/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Agricbusiness</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Agric/>
          </Box>

          <Box className='mb-10 cursor-pointer'>
            <div className='bg-red-600 p-2 font-sans text-base text-white w-32 text-center'>Banking</div>
            <hr className='border-b-1 border-red-600 mb-3'/>
            <Banking/>
          </Box>
        </Box>
        <SidebarRight2/>
      </Box>
    </div>
  )
}

export default Business
