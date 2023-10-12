import React, { useEffect } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Swipe from '../swiper/Swipe'
import { useDispatch, useSelector } from 'react-redux';
import { fetctRecentPost } from './../redux/createSlice/RecentPostSlice';

const MostStories = () => {
    const data = useSelector((state)=>state.recentPost.data)
    const status = useSelector((state)=>state.recentPost.status)
    const dispatch = useDispatch()
    console.log(status)
    console.log(data)

    useEffect(()=>{
        if(status === 'idle'){
            dispatch(fetctRecentPost())
        }
    },[status, dispatch])

  return (
      <Box className='w-full'>
        <Swipe/>
        {/**Recent Post */}
        <Box className="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
        {data.map((post) => {
           return (
                <Card key={post._id} className='mt-5' sx={{background:'#f4f4f4', sm:{padding:'1.5rem', lg:{padding:'2.5rem'}}}}>
                <Box className='flex justify-between items-center text-xs text-gray-400'>
                    <div>
                        <span>24 hours</span>
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
                <Card className='w-full mt-5 rounded-xl' sx={{width:'100%'}}>
                    <CardActionArea>
                        <CardMedia sx={{height:{lg:'300px', xs:'150px', sm:"200px"}, objectFit:"fill"}}
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
           ) 
        })}

        </Box>  
    </Box>

  )
}

export default MostStories
