import { Box, Card, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopular } from '../redux/createSlice/populaSlice'
import { Link, NavLink } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    <Box  className=' flex flex-col w-5/12 ml-5 sm:hidden lg:block p-2 sticky top-10' sx={{display:{xs:"none", lg:"block"}}}>
      
      
      {/* <Box className='grid lg:grid-cols-1 justify-center w-full pr-3'>
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
       */}
       <Box className="grid grid-cols-2 w-full mt">
          <Box className='flex w-24 h-[40px]  space-x-1 cursor-pointer items-center'>
            <FacebookIcon className='text-blue-600 cursor-pointer' />
            <div className='text-xl'>Facebook</div>
          </Box>

          <Box className='flex w-24 h-[40px]  space-x-1 cursor-pointer items-center'>
            <TwitterIcon className='text-blue-400 cursor-pointer' />
            <div className='text-xl'>Twitter</div>
          </Box>

          <Box className='flex w-24 h-[40px]  space-x-1 justify-center items-center cursor-pointer '>
            <GitHubIcon className='text-black cursor-pointer' />
            <div className='text-xl'>GitHub</div>
          </Box>

          <Box className='flex w-24 h-[40px]  space-x-1 justify-center items-center cursor-pointer '>
            <LinkedInIcon className='text-blue-600 ' />
            <div className='text-xl'>Linkedin</div>
          </Box>
          
       </Box>

       <span className='text-red-500 text-xl font-bold  rounded-md mt-10'>Most popular</span>
       
       <Box className=' w-full h-60 bg-black mt-5 relative '>
          <img className='object-fill w-full h-full absolute top-0' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU0oGGTqnhQAKjtk8ANVPrk6eQH62Cslqrg&usqp=CAU'/>
          <div className='absolute bottom-4 text-white px-5'>
              <div className='text-xl font-normal mb-2'>Finace</div>
              <div className='font-bold text-2xl tracking-normal'>Biticon devs warm posible cj=anin plit serve ddos vull shshhs ss</div>
              <div className='text-sm '>By <span>Samo</span> 12, oct, 5</div>
          </div>
       </Box>

       <Box className='w-full mt-5 my-10'>
          <Box className='w-full flex h-24 text-black border-b-2  justify-between items-center'>
            <div className='w-1/4 text-6xl font-bold text-gray-300'>
              <span>1</span>
            </div>
            <div className='w3/4 flex flex-col justify-evenly text-base'>
              <span className='font-bold mb-2 hover:text-red-600'>
                New physics AI could be the key to a quantum compugterr
              </span>
              <div className='text-sm text-red-300'>
                August 02, 2012
              </div>
            </div>
          </Box>
       </Box>

       <span className='text-red-500 text-xl font-bold  rounded-md mt-10'>Most popular</span>

       <Box className='w-full mt-10'>
          <div className='flex w-full h-24'>
            <div className='w-1/3 h-full'>
              <img className='w-full h-full object-fill' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqU0oGGTqnhQAKjtk8ANVPrk6eQH62Cslqrg&usqp=CAU' />
            </div>
            <div className='p-3 w-2/3 h-full'>
              <span className='font-bold mb-2 hover:text-red-600'>
                New physics AI could be the key to a quantum compugterr
              </span>
              <div className='text-sm text-red-300'>
                August 02, 2012
              </div>
          </div>
          </div>

       </Box>


    </Box>
  )
}

export default SidebarRight
