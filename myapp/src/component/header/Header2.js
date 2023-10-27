import { Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <div className='flex justify-between bg-red-600 items-center pl-4 pr-4 border-b-2 border-gray-400 mb-10' sx={{width:"100%"}}>
        <Box className='w-3/12'>
            logoo
        </Box>
        <Box className='w-6/12 flex' sx={{display:{xs:'none', lg:"block"}}} >
            <nav>
            <ul className='flex justify-between'>
                <a href='/' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > Home </li></a>  
                <a href='/news' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > News </li></a>
                <a href='/entertainment' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > Entertainment </li></a>
                <a href='/sports' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > Sports </li></a>
                <a href='/business' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > Business </li></a>
                <a href='/research' className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'><li > Research </li></a>
            </ul>
            </nav>
        </Box>
        <Box className="w-1/12">
            <div>sserach</div>
        </Box>
        <Box className='w-2/12'>
            social icones
        </Box>
      
    </div>
  )
}

export default Header2
