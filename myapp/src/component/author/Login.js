import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerAction } from '../redux/createSlice/InputSlice'

const Login = () => {
  const inputFilleds = useSelector((state)=>state.registerAuthor)
  const dispatch = useDispatch()

    const data = [
        {
            name:"email",
            label:"Email",
            type:"email"
        },
        {
            name:"password",
            label:"Password",
            type:"password"
        },
    ]

    const InputFillChange =(e)=>{
      console.log(e.target.name)
      dispatch(registerAction.authorInfo({
          name: e.target.name,
          value: e.target.value
      }))
  }



  return (
    <Box className = "flex w-screen h-screen items-center justify-center bg-gray-200">

        <Box component='div' className='bg-white flex items-center justify-center flex-col rounded-xl m-20' sx={{width:'500px', padding:"20px"}}>
          
          <Typography className='text-blue-800' sx={{fontWeight:"bold", fontSize:"30px", margin:'10px'}}>Sign in</Typography>
          
          {data.map(data =>{
              return (
                  <TextField onChange={InputFillChange} key={data.name}  name={data.name} type={data.type} label={data.label} variant="outlined" className='w-96' sx={{marginBottom:"20px"}}/>
              )
          })}
          
          <Button variant="contained" size='large'>Sign in</Button>
      
        </Box>
    </Box>
  )
}

export default Login
