import React, { useEffect } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Swipe from '../swiper/Swipe'
import { useDispatch, useSelector } from 'react-redux';
import { fetctRecentPost } from './../redux/createSlice/RecentPostSlice';
import Category from './../category/Category';

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
      <div >
        <Swipe/>
        
        {/**Recent Post */}
        {data.map((post) => {
           return (
            <Card key={post._id} className='p-10' sx={{background:'#f4f4f4'}}>
            <Box className='flex justify-between items-center text-xs text-gray-400'>
                <div>
                    <span>24 hours</span>
                </div>
                <div className='flex'>
                    {post.category[0].specific.map((specific)=>{
                       return <span className='mr-5'>{specific}</span>
                    })}
                </div>
            </Box>

            <Box className='mt-5'>
                <span className='text-xl font-sans font-bold'>{post.title}</span>
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
                        Source: {post.author.firstname} {post.author.lastname}
                        </span>
                        <span className='font-sans text-sm mt-5'>{post.content}</span>
                    </Box>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Card>
           ) 
        })}
        
    </div>

  )
}

export default MostStories
