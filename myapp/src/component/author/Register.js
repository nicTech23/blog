import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {
    const [input, setInput] = useState({
                                        firstname:'',
                                        lastname:'',
                                        email:'',
                                        username:'',
                                        password:'',
                                        comfirmpassword:''
                                        })
    const data = [
        {
            name:"firstname",
            label:"Firstname",
            type:"text"
        },
        {
            name:"lastname",
            label:"Lastname",
            type:"text"
        },
        {
            name:"email",
            label:"Email",
            type:"email"
        },
        {
            name:"username",
            label:"Username",
            type:"text"
        },
        {
            name:"password",
            label:"Password",
            type:"password"
        },
        {
            name:"confirmpassword",
            label:"Confirm password",
            type:"password"
        },
    ]
    
  return (
    <Box className = "flex w-screen h-screen items-center justify-center bg-gray-200">
      <Box component='div' className='bg-white flex items-center justify-center flex-col rounded-xl m-20' sx={{width:'500px', padding:"20px"}}>
        <Typography className='text-blue-800' sx={{fontWeight:"bold", fontSize:"30px", margin:'10px'}}>Register</Typography>
        {data.map(data =>{
            return (
                <TextField key={data.name}  name={data.name} type={data.type} label={data.label} variant="outlined" className='w-96' sx={{marginBottom:"20px"}}/>
            )
        })}
        <Button variant="contained" size='large'>Register</Button>
      </Box>
    </Box>
  )
}

export default Register
