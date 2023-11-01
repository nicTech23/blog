import React from 'react'
import PropTypes from 'prop-types'
import { Button, CardContent, CardMedia, Typography, CardActions, Card, Box } from '@mui/material'

const Cardbox = props => {
  return (
    <Box className='mt-14 flex flex-col'>
      <span className='text-red-500 text-xl font-bold p-1 rounded-md mb-5'>Top stories</span>

      <Box className='grid lg:grid-cols-2 sm:grid-cols-1 justify-center w-full pr-3'>
        
        <Card className='p-4 flex flex-row sm:full cursor-pointer'  sx={{width:{xs:'98%', lg:"370px"}, height:'140px'}}>
         
          <Box className='w-2/3 h-full pr-3 '>

            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptile3s, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>

            <Box className='flex space-x-2 mt-2 text-gray-500 font-medium'>
              <span>60</span>
              <span>comment</span>
            </Box>

          </Box>

          <Box className='w-1/3 h-full bg-green-500 flex justify-center rounded-lg'>
            <img className='w-full h-full rounded-lg' src='https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg'/>
          </Box>
        </Card>

        

        <Card className='p-4 flex flex-row'  sx={{width:{xs:'98%', lg:"370px"}, height:'140px'}}>
          <Box className='w-2/3 h-full pr-3 '>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptile3s, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <Box className='flex space-x-2 mt-3 text-gray-500 font-medium'>
              <span>60</span>
              <span >comment</span>
            </Box>
          </Box>

          <Box className='w-1/3 h-full bg-green-500 flex justify-center rounded-lg'>
            <img className='w-full h-full rounded-lg' src='https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg'/>
          </Box>
        </Card>

        <Card className='p-4 flex flex-row'  sx={{width:{xs:'98%', lg:"370px"}, height:'140px'}}>
          <Box className='w-2/3 h-full pr-3 '>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptile3s, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            <Box className='flex space-x-2 mt-3 text-gray-500 font-medium'>
              <span>60</span>
              <span>comment</span>
            </Box>
          </Box>

          <Box className='w-1/3 h-full bg-green-500 flex justify-center rounded-lg'>
            <img className='w-full h-full rounded-lg' src='https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg'/>
          </Box>
        </Card>

      </Box>
    </Box>
  )
}

Card.propTypes = {

}

export default Cardbox
