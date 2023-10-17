import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntertainment } from '../../redux/createSlice/allStoriesSlice'

const RadioTV = () => {
  const data = useSelector((state)=> state.allPostData.entertainment.data.data)
  const status = useSelector((state)=> state.allPostData.entertainment.status)
  
  const dispatch = useDispatch()
  console.log(data)
  console.log(status)
  //Function to get only radio stories
  const radioObjects = ()=>{
    if(data){
        return data.filter(item => item.category.some(category => category.specific.includes("radio")&&category.name === 'entertainment'));
    }
  }
  

const radioData = radioObjects();

  useEffect(()=>{
    if(status === 'idle'){
      dispatch((fetchEntertainment()))
    }

  }, [data, dispatch])
    
  return (
    <Box className='w-full grid lg:grid-cols-4 gap-4 sm:grid-cols-2'>
          {
            radioData?radioData.map(data =>{
              return(
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
              )
            }):null
          }
    </Box>
  )
}

export default RadioTV
