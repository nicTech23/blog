import { AppBar, Box, Button, Menu, MenuItem, Toolbar} from '@mui/material'
import React, { useState } from 'react'
import { Nav, NavLink, NavLinkLink } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';



const Header2 = () => {
const navLinkActive = ({isActive})=>{

}
const [search, setSearch] = useState(true)
const handleClick =()=>{
  setSearch(!search)
}
    
  return (
    <Box className="w-full" >
      <Box className="w-full flex items-center px-44 bg-red-600 justify-around h-16 ">
        <div className='w-4/6 flex justify-between items-center'>
          <div className='flex w-1/8'>
            <span className='font-black text-white text-4xl'>Logo</span>
          </div>
          <nav className='flex justify-between items-center h-7/8 text-white font-semibold '>
            <NavLink className='mr-5 px-4 py-2 font-semibold font-sans text-md '>Home</NavLink>
            <NavLink className='mr-5 px-4 py-2 font-semibold font-sans text-md'>News</NavLink>
            <NavLink className='mr-5 px-4 py-2 font-semibold font-sans text-md'>Sports</NavLink>
            <NavLink className='mr-5 px-4 py-2 font-semibold font-sans text-md'>Business</NavLink>
            <NavLink className='mr-5 px-4 py-2 font-semibold font-sans text-md'>Intertainment</NavLink>
          </nav>
        </div>
        <div className='w-2/6 flex justify-end items-end' >
          {search?<SearchIcon className='text-white cursor-pointer transition-all ease-in' onClick={handleClick}/>:
          <div className='w-full px-3 py-1 rounded-lg bg-white flex space-x-2'>
            <input className='w-full border-none outline-0 ' type='text'/>
            <span onClick={handleClick} className='text-red-600 font-bold text-lg cursor-pointer border-l-2 border-red-600' >X</span>
          </div>
          }
        </div>
      </Box>
    </Box>
  )
}

export default Header2
