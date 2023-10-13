import { Box } from '@mui/material'
import React from 'react'

const Header2 = () => {
  return (
    <div className='flex justify-between bg-red-600 items-center pl-4 pr-4 border-b-2 border-gray-400 mb-10' sx={{width:"100%"}}>
        <Box className='w-3/12'>
            logoo
        </Box>
        <Box className='w-6/12 flex' sx={{display:{xs:'none', lg:"block"}}} >
            <ul className='flex justify-between'>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>Home</li>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>News</li>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>Entertainment</li>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>Sport</li>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>Business</li>
                <li className='p-4 text-white text-base font-sans hover:bg-black cursor-pointer transition ease-in'>Research</li>
            </ul>
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
