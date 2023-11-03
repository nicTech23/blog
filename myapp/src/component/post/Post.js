import { Box, Button, Checkbox, FormControlLabel, FormGroup,  TextareaAutosize, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Post = () => {
    const postData = useSelector((state)=> state.post)

    const dispatch = useDispatch()

    const[title, setTitle] = useState('')
    const[content, setContent] = useState('')
    const[category, setCategory] = useState([])
    const[popular, setPopular] = useState('')
    const[image, setImage] = useState('')
    const[author, setAuthor] = useState('Yaw')

    const [categoryCheck, setCategoryCheck] = useState('')
    
    console.log(image)

    // getting story type to category
    const categoryGetHandle = (e)=>{
        if(e.target.checked){
            setCategory([...category, e.target.value])
        } else {
            setCategory(category.filter(data => data !== e.target.value))
        }
    }

    // Selecting story Type an clearing category
    const CategoryHandleChange = (e) =>{
        setCategoryCheck(e.target.value)
        setCategory([])
    }

    const titleHandle = (e)=>{
        setTitle(e.target.value)
    }

    const contentHandle = (e)=>{
        setContent(e.target.value)
    }

    const imageHandle = (e)=>{
        setImage(e.target.file)
    }

    const popularHandle = (e)=>{
        if(e.target.checked){
            setPopular(true)
            } else{
                setPopular(false)
            }
        }
    const HandlePost = async()=>{
       const data ={}
       if(title)  data.title = title
       if(content) data.content = content
       if(category) data.category = category
       if(author) data.author = author
       
       const obKey = Object.keys(data).length
       if((obKey>3 ) && (category.length > 0)){
        dispatch({
            title,
            content,
            category,
            image,
            author,
            popular
        })
       }
       let format = new FormData()
       
       for(let key in postData){
        format.append(key, postData[key])
       }
       console.log(format)
       const response = await axios.post(`http://localhost:8080/api/v1/createpost/`, format)
       console.log(response)
    }  


  return (
    <Box className=' m-auto p-10 items-stretch justify-center ' sx={{width:"60%"}}>
        <Box className='mb-6 self-center w-full flex items-center justify-center'>
            <span className='font-semibold text-5xl font-sans'>Post Story</span>
        </Box>
        <FormGroup>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Title</Typography>
                <input onChange={titleHandle} type='text' className='w-full border-2 border-sky-700 p-5 mb-5 outline-0'/>
            </Box> 
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Content</Typography>
                <Box  className=' border-2 border-sky-700 mb-5' sx={{width: "100%"}}>
                <TextareaAutosize onChange={contentHandle} className='w-full flex self-center border-0 outline-0 px-4' aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
                </Box>
            </Box>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Category</Typography>
                <select value={categoryCheck} onChange={CategoryHandleChange} className='w-full border-2 border-sky-700 p-3 mb-5 outline-0' name="selectedOption">
                    <option value="">Select category of post</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Box>
            <Box className="mb-5">
                {categoryCheck === 'sports'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel onChange={categoryGetHandle} value='football' control={<Checkbox />} label="Football" />
                        <FormControlLabel onChange={categoryGetHandle} value='boxing'required control={<Checkbox />} label="Boxing" />
                        <FormControlLabel onChange={categoryGetHandle} value='football' control={<Checkbox />} label="Disabled" />
                        <FormControlLabel onChange={categoryGetHandle} value='tennis' control={<Checkbox />} label="Tennis" />
                        <FormControlLabel onChange={categoryGetHandle} value='athletics' control={<Checkbox />} label="Athletics" />
                    </FormGroup>
                </>: null}
                {categoryCheck === 'news'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel onChange={categoryGetHandle} value='news' control={<Checkbox />} label="News" />
                        <FormControlLabel onChange={categoryGetHandle} value='education' control={<Checkbox />} label="Education" />
                        <FormControlLabel onChange={categoryGetHandle} value='international' control={<Checkbox />} label="International" />
                        <FormControlLabel onChange={categoryGetHandle} value='national' control={<Checkbox />} label="National" />
                        <FormControlLabel onChange={categoryGetHandle} value='politics' control={<Checkbox />} label="Politics" />
                        <FormControlLabel onChange={categoryGetHandle} value='regional' control={<Checkbox />} label="Reginal" />
                        <FormControlLabel onChange={categoryGetHandle} value='technology' control={<Checkbox />} label="Technology" />
                        <FormControlLabel onChange={categoryGetHandle} value='crime'required control={<Checkbox />} label="Crime" />
                    </FormGroup>
                </>: null}
                {categoryCheck === 'business'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel onChange={categoryGetHandle} value='economic' control={<Checkbox />} label="Economic" />
                        <FormControlLabel onChange={categoryGetHandle} value='energy'required control={<Checkbox />} label="Energy" />
                        <FormControlLabel onChange={categoryGetHandle} value='finance' control={<Checkbox />} label="Finance" />
                        <FormControlLabel onChange={categoryGetHandle} value='mining' control={<Checkbox />} label="Mining" />
                        <FormControlLabel onChange={categoryGetHandle} value='real estate' control={<Checkbox />} label="Real estate" />
                        <FormControlLabel onChange={categoryGetHandle} value='agricultural' control={<Checkbox />} label="agricultural" />
                        <FormControlLabel onChange={categoryGetHandle} value='Banking' control={<Checkbox />} label="Banking" />
                    </FormGroup>
                </>: null}
                {categoryCheck === 'entertainment'? <>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                <FormGroup>
                    <FormControlLabel onChange={categoryGetHandle} value='music' control={<Checkbox />} label="Music" />
                    <FormControlLabel onChange={categoryGetHandle} value='movie'required control={<Checkbox />} label="Movie" />
                    <FormControlLabel onChange={categoryGetHandle} value='radio' control={<Checkbox />} label="Radio" />
                    <FormControlLabel onChange={categoryGetHandle} value='stage' control={<Checkbox />} label="Stage" />
                </FormGroup>
                </>: null}
            </Box>
            <Box className='mb-5'>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Popular</Typography>
                <FormControlLabel onChange={popularHandle} control={<Checkbox />} label="Is popular" />
            </Box>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story Picture</Typography>
                <input onChange={imageHandle} type='file' className='w-full mb-5' />
            </Box>
            <Button onClick={HandlePost} variant='contained' >Post</Button>
        </FormGroup>
    </Box>
  )
}

export default Post
