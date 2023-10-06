import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {
    const [input, setInput] = useState({
                                        email:'',
                                        password:'',
                                        })
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
    
  return (
    <Box className = "flex w-screen h-screen items-center justify-center bg-gray-200">
      <Box component='div' className='bg-white flex items-center justify-center flex-col rounded-xl m-20' sx={{width:'500px', padding:"20px"}}>
        <Typography className='text-blue-800' sx={{fontWeight:"bold", fontSize:"30px", margin:'10px'}}>Sign in</Typography>
        {data.map(data =>{
            return (
                <TextField key={data.name}  name={data.name} type={data.type} label={data.label} variant="outlined" className='w-96' sx={{marginBottom:"20px"}}/>
            )
        })}
        <Button variant="contained" size='large'>Sign in</Button>
      </Box>
    </Box>
  )
}

export default Login
