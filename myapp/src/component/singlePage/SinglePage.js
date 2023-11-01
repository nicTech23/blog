import { Avatar, Box, Button, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Cardbox from './Cardbox'
import SidebarRight from './../sidebarRight/SidebarRight';
import { useParams } from 'react-router-dom';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { singleDataAction } from './../redux/createSlice/singleData';
import { useDispatch, useSelector } from 'react-redux';
import Header2 from '../header/Header2';



const SinglePage = () => {

  const data = useSelector((state)=> state.singleData)
  const loading = useSelector((state)=> state.singleData.loading)
  const dispatch = useDispatch()
   
  const {category, title} = useParams()

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  const GetData = async()=>{
    try {
        const response = await axios.get(`http://localhost:8080/api/v1/singledata/${category}/${title}`, config)
        const responseData = await response.data
        dispatch(singleDataAction.singleData(responseData))
    } catch (error) {
      return error.message
    }
  }

  useEffect(()=>{
    if(loading)
      GetData()
  }, [dispatch, loading])

  console.log(data)
  return (
    <Box>
      <Header2/>

        <Box className='w-full flex flex-row justify-center pl-14 pr-14 sm:pl-0 sm:pr-0'sx={{paddingLeft:{xs:'2px', lg:'3.5rem'}, paddingRight:{xs:'2px', lg:'3.5rem'}}} > 
          {/* {data ? <div dangerouslySetInnerHTML={{__html: data.data.content}}/>: null} */}
          <Box className='w-7/ pr-14 sm:pr-5 sm:w-full' sx={{paddingLeft:{xs:'2px'}, paddingRight:{xs:'2px', lg:"3.5rem"}, width:{xs:'90%', lg:"100%"}}}>
            {data && data.data && data.data.title ? <div className='text-3xl capitalize font-black, font-sans' dangerouslySetInnerHTML={{__html: data.data.title.split('-').join(' ')}}/>: null} 
              
              <CardMedia className='rounded-2xl w-full overflow-hidden mt-5 mb-5' sx={{objectFit:'cover', height:{xs:'400px', lg:'500px'}}}
                          component="img"
                          image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                          alt="green iguana"
                          />

                {data ? <Typography className='text text-justify' dangerouslySetInnerHTML={{__html: data.data.content}}/>: null}
              
              <Box className='mt-10 flex flex-col'>
                <Typography sx={{fontSize:"18px", fontWeight:'bold'}}>Let us have your comment</Typography>
                <textarea rows={4} cols={5} className='w w-3/4 border border-1 hover:border-2 outline-0 pl-5 border-red-500 rounded-2xl'/>
                <Button variant='contained' color='error' className='t lowercase' sx={{width:'100px', marginTop:"10px"}} >comment</Button>
              </Box>
      
              <Box>
                <Cardbox/>
              </Box>
              
        </Box>

        <SidebarRight/>

      </Box>
    </Box>
  )
}

export default SinglePage
