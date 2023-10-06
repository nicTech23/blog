import { Box } from '@mui/material'
import React from 'react'

const sidebarRight = () => {
  return (
    <div className='w-1/3 pl-5 pt-5 border-l-2'>
      <Box className='w-full rounded-xl h-screen bg-gray-200 p-5'>
        <span className='font-sans font-semibold'>Most read stories</span>
        <Box className='flex flex-col mt-5'>
          <span className='font-normal'>GPRTU</span>
          <span className='text-sm text-gray-600' >The GPRTU has increase their transportation by 5%, ite will take effect from this month</span>
        </Box>
        <Box className='flex flex-col mt-5'>
          <span className='font-normal'>GPRTU</span>
          <span className='text-sm text-gray-600' >The GPRTU has increase their transportation by 5%, ite will take effect from this month</span>
        </Box>
        <Box className='flex flex-col mt-5'>
          <span className='font-normal'>GPRTU</span>
          <span className='text-sm text-gray-600' >The GPRTU has increase their transportation by 5%, ite will take effect from this month</span>
        </Box>
        <Box className='flex flex-col mt-5'>
          <span className='font-normal'>GPRTU</span>
          <span className='text-sm text-gray-600' >The GPRTU has increase their transportation by 5%, ite will take effect from this month</span>
        </Box>
      </Box>
    </div>
  )
}

export default sidebarRight
