import React, { useEffect, useState } from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Box, CardMedia } from '@mui/material';
import './Swipe.css'
const Swipe = () => {
  const data = [
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
    {
      
      title: `IT system is solid: NPP Can't much us in 2024 - Oman Boamah`
    },
  ]

  return (
    <div className='w-full'>
      <Swiper 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay={true}
        >
         {data.map((data, index)=>{
            return(
              <SwiperSlide key={index}>
                <Box className='relative w-60 h-64 overflow-hidden rounded-xl'>
                <CardMedia className='absolute w-60 h-64' sx={{ objectFit:"cover"}}
                        component="img"
                        image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                        alt="image"
                      />
                <div className='absolute w-60 h-64 top-0 bg-gradient-to-t from-black via-10% to-transparent to-90%'></div>
                <span className='absolute bottom-1 text-white font-sans font-bold m-3'>{data.title}</span>
                </Box>
              </SwiperSlide>
            )
         })}
        
    </Swiper>
    </div>
  )
}

export default Swipe
