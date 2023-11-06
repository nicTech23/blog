import React, { useEffect } from 'react'
import MostStories from '../mostSories/MostStories'
import { Box } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { fetctRecentPost } from '../redux/createSlice/RecentPostSlice'
import { Link } from 'react-router-dom'


const Content = () => {

  const recentData = useSelector(state=>state.recentPost.data)
  const status = useSelector(state=>state.recentPost.status)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    if(status === 'idle'){
      dispatch(fetctRecentPost())
    }
  })
 
  // `http://localhost:8080/image/${recentData[0].image}`: null
  return (
      <Box className='w-7/12 bg-white  p-5'sx={{width:{xs:'100%', lg:'75%'}}}>
       
        {/*Top Image */}
          {
            recentData?recentData.map( (data, index) =>{
              const imageUrl = `http://localhost:8080/image/${data.image}`
              if (index === 0 )
                return (
                  <Box id='top-image' className="w-full h-[28rem] bg-black relative mb-12" >

                      <img 
                      className='object-fill absolute top-0 w-full h-full'
                      src={imageUrl}
                      />
                    
                    <Box className='absolute flex-col bottom-10 text-white px-10'>
                        <div className='font-bold mb-3'>Finance</div>
                        <Link to={`/${data.category}/${data.type}/${data.title}`}>
                          <span
                            className='font-sans font-extrabold text-3xl tracking-wide cursor-pointer'
                          >
                            {data.title}
                          </span>
                        </Link>
                        <Box className='mt-3 tracking-wide'>
                          <span className='text-slate-400 mr-1'>By</span>
                          <span className='font-bold capitalize'> {data.author.firstname} {data.author.lastname}</span>
                          <span className='text-slate-300 ml-2'>August 02, 2021</span>
                        </Box>
                      </Box>
                  </Box>
                    )
              }) :null
              }
                  
        {/* Two boxs */}
        <Box  className='flex space-x-3 mb-5'>
          {
            recentData?recentData.map((data, index)=>{
              const imageUrl = `http://localhost:8080/image/${data.image}`
              if(index >=1 && index <=2) return (

                <Box className='w-1/2 h-80  border-2 shadow-md border-slate-200 flex flex-col justify-evenly'>
                    <Box className='w-full h-[13rem] border-b-2 border-slate-100'>
                      <img className='object-fill h-full w-full' src={imageUrl}/>
                    </Box>

                    <Box className="w-full p-5 ">
                      <Box>
                      
                      <Link to={`/${data.category}/${data.type}/${data.title}`}>
                        <span className='text-lg font-semibold hover:text-red-600 '>{data.title}</span>
                      </Link>
                        
                      </Box>

                      <Box className='mt-2 tracking-wide'>
                        <span className='text-slate-400 mr-1 text-xs'>By</span>
                        <span className='font-bold text-red-600 text-sm capitalize'>{data.author.firstname} {data.author.lastname}</span>
                        <span className='text-slate-300 ml-2 text-sm'>August 02, 2021</span>
                      </Box>
                  </Box>
            
          </Box>
              )
            }) : null
          }
          </Box>
            

          <span className='text-xl text-red-600 font-semibold font-sans'>Latest News</span>

          {/*Latest new boxs */}

          {
            recentData? recentData.map((data, index)=>{
              const imageUrl = `http://localhost:8080/image/${data.image}`
              if(index < 20)
              return(
                <Box className='w-full h-[10rem] mb-10 flex mt-3 '>
                  {/* Image */}
                  <Box className='w-[38%] relative h-[10rem] boreder-2 '>
                    <img className='object-fill w-full h-full'src={imageUrl}/>
                  </Box>
    
                  {/* content */}
                  <Box className="w-[62%] boreder-2 h-full p-3 flex flex-col justify-evenly border-2">
                      <Box className='mb-2'>
                        <Link to={`/${data.category}/${data.type}/${data.title}`}>
                          <span className='text-lg font-semibold hover:text-red-600 '>{data.title}</span>
                        </Link>
                      </Box>
                      <Box className='text-sm font-sans '>
                          <span>{data.content.substring(0,200)}...</span>
                      </Box>
                      <Box className='mt-3 tracking-wide'>
                        <span className='text-slate-500 mr-1 text-xs'>By</span>
                        <span className='font-bold text-red-600 text-sm capitalize'>{data.author.firstname} {data.author.lastname}</span>
                        <span className='text-slate-400 ml-2 text-sm'>August 02, 2021</span>
                      </Box>
                  </Box>
                </Box>
              )
            }):null
          }
         
      </Box>
  )
}

export default Content
