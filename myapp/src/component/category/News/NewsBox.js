import { Box, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNews } from '../../redux/createSlice/allStoriesSlice'
import { Link } from 'react-router-dom'

const NewsBox = () => {
  const data = useSelector((state)=> state.allPostData.news.data.data)
  const status = useSelector((state)=> state.allPostData.news.status)
  
  const dispatch = useDispatch()
  
  //Function to get only news stories
  const newsObjects = ()=>{
    if(data){
      return data.filter(item => item.category.some(category => category.storytypes.includes("news")&& category.name === 'news'));
    }
  }
  

const newsData = newsObjects();

  useEffect(()=>{
    if(status === 'idle'){
      dispatch((fetchNews()))
    }
  }, [data, dispatch])
    
  return (
    <Box className='w-full grid lg:grid-cols-4 gap-4 sm:grid-cols-2'>
          {
            newsData?newsData.map(data =>{
              let url = `/${data.category[0].name}/${data.title}`
              return(
                <Link key={data._id} to={url}>
                  <Box className='bg-gray-200 h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
                    <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                                component="img"
                                image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                                alt="green iguana"
                                />
                    <Box  className='m-3 overflow-hidden'>
                      <span className='text-sm'>{data.content}</span>
                    </Box>
                  </Box>
                </Link>
              )
            }):null
          }
    </Box>
  )
}

export default NewsBox
