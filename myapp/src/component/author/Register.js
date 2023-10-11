import { Box, Button, TextField, Typography } from '@mui/material'
import {useSelector, useDispatch} from 'react-redux'
import {registerAction} from '../redux/createSlice/InputSlice'
import axios from 'axios'

const Register = () => {
    const inputFilleds = useSelector((state)=>state.registerAuthor)
    const dispatch = useDispatch()
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
    
    const InputFillChange =(e)=>{
        dispatch(registerAction.authorInfo({
            name: e.target.name,
            value: e.target.value
        }))
    }

    const Onsubmit =  async (e)=>{
        try {
            const respons = await axios.post('http://localhost:8080/api/v1/createauthor/', inputFilleds.register)
            const data = respons.data
            console.log(data)
        } catch (error) {
            if (error){
                console.log(error)
            }
        }
    }
    
  return (
    <Box className = "flex w-screen h-screen items-center justify-center bg-gray-200">
      <Box component='div' className='bg-white flex items-center justify-center flex-col rounded-xl m-20' sx={{width:'500px', padding:"20px"}}>
        <Typography className='text-blue-800' sx={{fontWeight:"bold", fontSize:"30px", margin:'10px'}}>Register</Typography>
        <form className='flex flex-col justify-center, items-center'>
        {data.map(data =>{
            return (
                <TextField  onChange={InputFillChange} key={data.name}  name={data.name} type={data.type} label={data.label} variant="outlined" className='w-96' sx={{marginBottom:"20px"}}/>
            )
        })}
        <Button onClick={Onsubmit}variant="contained" size='large'>Register</Button>
        </form>
      </Box>
    </Box>
  )
}

export default Register
