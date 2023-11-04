import React, { useEffect, useState } from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import Swipe from '../swiper/Swipe'
import { useDispatch, useSelector } from 'react-redux';
import { fetctRecentPost } from './../redux/createSlice/RecentPostSlice';
import { Link } from 'react-router-dom';


const MostStories = () => {
    const data = useSelector((state)=>state.recentPost.data)
    const status = useSelector((state)=>state.recentPost.status)
    const dispatch = useDispatch()
    
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
        <Box className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2">
        {data?data.map((post) => {
            let imageUrl = `http://localhost:8080/image/${post.image}`
            let url = `/${post.category}/${post.type}/${post.title}`
           return (
                <Link key={post._id} to={url}>
                <Card className='mt-5' sx={{background:'#f4f4f4', sm:{padding:'1.5rem', lg:{padding:'2.5rem'}}}}>
                <Box  className='flex justify-between items-center text-xs text-gray-400'>
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
                    <span className='text-xl font-sans font-bold'>{post.title}</span>
                    {data && data.title ? <span className='text-xl font-sans font-bold'  dangerouslySetInnerHTML={{__html: data.title.split('-').join(' ')}}/> : null}
                </Box>
                <Card className='w-full mt-5 rounded-xl ' sx={{width:'100%'}}>
                    <CardActionArea>
                        <CardMedia sx={{height:{lg:'300px', xs:'150px', sm:"200px"}, objectFit:"cover"}}
                        component="img"
                        image={imageUrl}
                        alt="green iguana"
                        
                        />
                        <CardContent sx={{height:'150px'}}>
                        <Box className='flex flex-col'>
                            <span className='text-xs text-gray-500 capitalize'>
                            Source: {post.author.firstname} {post.author.lastname}
                            </span>
                            <span className='font-sans text-sm mt-1'>{post.content.substring(0,300)} </span>
                        </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Card>
            </Link>
           ) 
        }):null}

        </Box>  
    </Box>

  )
}

export default MostStories
