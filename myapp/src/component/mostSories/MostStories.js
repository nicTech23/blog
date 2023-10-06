import React from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Swipe from '../swiper/Swipe'


const MostStories = () => {
  return (
      <div>
        <Swipe/>
        <Card className='p-10' sx={{background:'#f4f4f4'}}>
            <Box className='flex justify-between items-center text-xs text-gray-400'>
                <div>
                    <span>24 hours ago</span>
                </div>
                <div className='flex'>
                    <span className='mr-5'>National</span>
                    <span className='mr-5'>News</span>
                    <span className='mr-7'>Politics</span>
                </div>
            </Box>

            <Box className='mt-5'>
                <span className='text-xl font-sans font-bold'> IT system is solid: NPP Can't much us in 2024 - Oman Boamah</span>
            </Box>
            <Card className='w-full mt-5 rounded-xl'>
                <CardActionArea>
                    <CardMedia sx={{height: '300px', objectFit:"fill"}}
                    component="img"
                    image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                    alt="green iguana"
                    />
                    <CardContent sx={{height:'150px'}}>
                    <Box className='flex flex-col'>
                        <span className='text-xs text-gray-500 capitalize'>
                        Source: Oppong nicholas
                        </span>
                        <span className='font-sans text-sm mt-5'>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica Lizards are 
                        a widespread group of squamate reptiles, with over 6,000
                        </span>
                    </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Card>
    </div>

  )
}

export default MostStories
