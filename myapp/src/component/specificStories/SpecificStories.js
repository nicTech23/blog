import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import SidebarRight from '../sidebarRight/SidebarRight'
import { Link, useParams } from 'react-router-dom'
import { specificStoriesAction } from './../redux/createSlice/SpecificStories';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Header2 from '../header/Header2';

const SpecificStories = () => {
  const data = useSelector((state)=>state.specificStories.data)
  const loading = useSelector((state)=>state.specificStories.loading)
  const {storytype, stories} = useParams()

  const dispatch = useDispatch()
  
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const SpecificStoriesData = async ()=>{
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/category/${storytype}/${stories}/`, config)
      const data = await response.data
      dispatch(specificStoriesAction.getStories(data))
      console.log(loading)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(loading){
      SpecificStoriesData()
    }
  }, [dispatch, data, loading])


  return (
      <Box>
        <Header2/>
        <Box className ='flex flex-row pr-5 pl-5 space-x-4' sx={{width:"100%"}}>
          <Box className='w-full grid lg:grid-cols-4 gap-4 sm:grid-cols-2'>
                {
                  data?data.map(data =>{
                    let url = `/${data.category[0].name}/${data.category[0].mainstory}/${data.title}`
                    return(
                      <Link key={data._id} to={url}>

                        <Box className='bg-gray-200  overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
                            
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
        <SidebarRight/>
      </Box>
      </Box>
  )
}

export default SpecificStories
