import { Box, Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopular } from '../redux/createSlice/populaSlice'
import { Link, NavLink } from 'react-router-dom'

const SidebarRight = () => {
  const data = useSelector((state)=> state.popular.data.data)
  const status = useSelector((state)=> state.popular.status)
  console.log('popular', data)

  const distpatch = useDispatch()

  useEffect(()=>{
      if(status === 'idle'){
        distpatch(fetchPopular())
      }
  },[status, distpatch, data])

  return (
    <Box  className=' flex flex-col w-5/12 ml-5 sm:hidden lg:block  sticky bg-gray-50 p-2' sx={{display:{xs:"none", lg:"block"}}}>
      <span className='text-red-500 text-xl font-bold  rounded-md'>Most popular</span>
      
      <Box className='grid lg:grid-cols-1 justify-center w-full pr-3'>
        {data ? data.map((data) =>{
       
          return (
            <a key={data._id} href={`/${data.category}/${data.type}/${data.title}`}>
              <Card className='p-4 flex flex-row sm:full cursor-pointer mt-3 w-full'>
                
                <Box className='w-2/6 h-[100px] bg-green-500 flex justify-center rounded-lg'>
                    <img className='w-full h-full rounded-lg object-cover' src={`http://localhost:8080/image/${data.image}`}/>
                </Box>

                <Box className='w-4/6 h-full pl-3 '>
                  <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptile3s, with over 6,000
                      species, ranging across all continents except Antarctica
                  </Typography>
                </Box>

            </Card>
            </a>
          )
        }):null}
        
      </Box>
      
    </Box>
  )
}

export default SidebarRight
