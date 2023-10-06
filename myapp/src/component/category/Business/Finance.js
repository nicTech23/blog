import { Box, CardMedia } from '@mui/material'
import React from 'react'

const Finance = () => {
  return (
    <Box className='w-full grid grid-cols-4 gap-4'>
    <Box className='bg-gray-200 h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
      <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                  component="img"
                  image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                  alt="green iguana"
                  />
      <Box  className='m-3 overflow-hidden'>
        <span className='text-sm'> Sport The Government has reduce school fees </span>
      </Box>
    </Box>

    <Box className='bg-gray-200 h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
      <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                  component="img"
                  image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                  alt="green iguana"
                  />
      <Box  className='m-3 overflow-hidden'>
        <span className='text-sm'> The Government has reduce school fees </span>
      </Box>
    </Box>
    <Box className='bg-gray-200 h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
      <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                  component="img"
                  image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                  alt="green iguana"
                  />
      <Box  className='m-3 overflow-hidden'>
        <span className='text-sm'> The Government has reduce school fees </span>
      </Box>
    </Box>
    <Box className='bg-gray-200 h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
      <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                  component="img"
                  image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                  alt="green iguana"
                  />
      <Box  className='m-3 overflow-hidden'>
        <span className='text-sm'> The Government has reduce school fees </span>
      </Box>
    </Box>
  </Box>
  )
}

export default Finance
