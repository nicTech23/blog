import { Box, Button, Checkbox, FormControlLabel,  Radio,  RadioGroup,  TextareaAutosize, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../redux/createSlice/PostSlice';


const Post = () => {
    const postData = useSelector((state)=> state.post)

    const dispatch = useDispatch()

    // geting  target value in postData.category to display list of storyTypes in that postData.category in Post Pasge

    // getting story type to postData.category 

    // Selecting story Type an clearing postData.category
    const categoryHandle = (e) =>{
        dispatch(postAction.getCategory(e.target.value))
    }

    // Selecting story Type an clearing postData.category
    const typeHandle= (e) =>{
        dispatch(postAction.getType(e.target.value))
    }

    // getting Title of the post
    const titleHandle = (e)=>{
        dispatch(postAction.getTitle(e.target.value))
    }

    // getting Content of the post
    const contentHandle = (e)=>{
        dispatch(postAction.getContent(e.target.value))
    }

    // getting Image of the post
    const imageHandle = (e)=>{
        dispatch(postAction.getImage(e.target.files[0]))
    }

    // showing is the story will be popular or not
    const popularHandle = (e)=>{
        if(e.target.checked){
            dispatch(postAction.getPopural(true))
            } else{
                dispatch(postAction.getPopural(false))
            }
        }

         
    const HandlePost = async()=>{
         const formData = new FormData()
         formData.append('image', postData.image)
         formData.append('title', postData.title)
         formData.append('content', postData.content)
         formData.append('category', postData.category)
         formData.append('type', postData.type)
         formData.append('popular', postData.popular)
         formData.append('author', postData.author)
         const response = await axios.post('http://localhost:8080/api/v1/createblog', formData)
        console.log(response)
    }  

  return (
    <Box className=' m-auto p-10 items-stretch justify-center ' sx={{width:"60%"}}>
        <Box className='mb-6 self-center w-full flex items-center justify-center'>
            <span className='font-semibold text-5xl font-sans'>Post Story</span>
        </Box>

        <RadioGroup >
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
                <select value={postData.category} onChange={categoryHandle} className='w-full border-2 border-sky-700 p-3 mb-5 outline-0' name="selectedOption">
                    <option value="">Select of category type</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Box>
            <Box className="mb-5">
                {/* This condition check the postData.category of story and display it story type */}
                {postData.category === 'sports'? <>
                <Typography sx={{fontWeight:'bold', fontSize:18}}>Type</Typography>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={postData.type}
                        onChange={typeHandle} 
                    >
                        <FormControlLabel  value='football' control={<Radio />} label="Football" />
                        <FormControlLabel  value='boxing' control={<Radio />} label="Boxing" />
                        <FormControlLabel  value='tennis' control={<Radio />} label="Tennis" />
                        <FormControlLabel  value='athletics' control={<Radio />} label="Athletics" />
                    </RadioGroup >
                </>: null}

                {postData.category === 'news'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:18}}>Type</Typography>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={postData.type}
                        onChange={typeHandle} 
                    >
                        <FormControlLabel  value='news' control={<Radio />} label="News" />
                        <FormControlLabel  value='education' control={<Radio />} label="Education" />
                        <FormControlLabel  value='international' control={<Radio />} label="International" />
                        <FormControlLabel  value='national' control={<Radio />} label="National" />
                        <FormControlLabel  value='politics' control={<Radio />} label="Politics" />
                        <FormControlLabel  value='regional' control={<Radio />} label="Reginal" />
                        <FormControlLabel  value='technology' control={<Radio />} label="Technology" />
                        <FormControlLabel  value='crime'required control={<Radio />} label="Crime" />
                    </RadioGroup >
                </>: null}

                {postData.category === 'business'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:18}}>Type</Typography>
                    <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={postData.type}
                        onChange={typeHandle} 
                    >
                        <FormControlLabel  value='economic' control={<Radio />} label="Economic" />
                        <FormControlLabel  value='energy'required control={<Radio />} label="Energy" />
                        <FormControlLabel  value='finance' control={<Radio />} label="Finance" />
                        <FormControlLabel  value='mining' control={<Radio />} label="Mining" />
                        <FormControlLabel  value='real estate' control={<Radio />} label="Real estate" />
                        <FormControlLabel  value='agricultural' control={<Radio />} label="agricultural" />
                        <FormControlLabel  value='Banking' control={<Radio />} label="Banking" />
                    </RadioGroup >
                </>: null}

                {postData.category === 'entertainment'? <>
                <Typography sx={{fontWeight:'bold', fontSize:18}}>Type</Typography>
                <RadioGroup 
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={postData.type}
                        onChange={typeHandle} 
                    >
                    <FormControlLabel  value='music' control={<Radio />} label="Music" />
                    <FormControlLabel  value='movie'required control={<Radio />} label="Movie" />
                    <FormControlLabel  value='radio' control={<Radio />} label="Radio" />
                    <FormControlLabel  value='stage' control={<Radio />} label="Stage" />
                </RadioGroup >
                </>: null}
            </Box>
            
            <Box className='mb-5'>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Popular</Typography>
                <FormControlLabel onChange={popularHandle} control={<Checkbox />} label="Is popular" />
            </Box>

            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story Picture</Typography>
                <input onChange={imageHandle} type='file' accept='image/*' className='w-full mb-5' />
            </Box>

            <Button onClick={HandlePost} variant='contained' >Post</Button>
        </RadioGroup >

    </Box>
  )
}

export default Post
