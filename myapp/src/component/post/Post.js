import { Box, Button, Checkbox, FormControlLabel, FormGroup,  TextareaAutosize, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAction } from '../redux/createSlice/PostSlice';


const Post = () => {
    const postData = useSelector((state)=> state.post)


    const dispatch = useDispatch()

    // geting  target value in category to display list of storyTypes in that category in Post Pasge
    const [categoryCheck, setCategoryCheck] = useState('')
    const [categoryName, setCategoryName] = useState('')

    // getting story type to category 
    const categoryGetHandle = (e)=>{
        dispatch(postAction.getCategory(e.target.value))
    }

    // Selecting story Type an clearing category
    const CategoryNameHandleChange = (e) =>{
        setCategoryName(e.target.value)
    }

    // Selecting story Type an clearing category
    const CategoryCheckHandleChange = (e) =>{
        setCategoryCheck(e.target.value)

        //clearing the category data when different category is selected
        dispatch(postAction.getChecKCategory(e.target.value))
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
        formData.append('mainstory', postData.category[0])
        formData.append('storytypes', postData.category)
        formData.append('popular', postData.popular)
        formData.append('author', postData.author)
        formData.append('categoryname', categoryName)

        const response = await axios.post('http://localhost:8080/api/v1/createblog', formData)
    
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
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Category name</Typography>
                <select value={categoryName} onChange={CategoryNameHandleChange} className='w-full border-2 border-sky-700 p-3 mb-5 outline-0' name="selectedOption">
                    <option value="">Select category of post</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Box>

            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story Types</Typography>
                <select value={categoryCheck} onChange={CategoryCheckHandleChange} className='w-full border-2 border-sky-700 p-3 mb-5 outline-0' name="selectedOption">
                    <option value="">Select category of post</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Box>
            <Box className="mb-5">
                {/* This condition check the category of story and display it story type */}
                {categoryCheck === 'sports'? <>
                    <FormGroup>
                        <FormControlLabel onChange={categoryGetHandle} value='football' control={<Checkbox />} label="Football" />
                        <FormControlLabel onChange={categoryGetHandle} value='boxing'required control={<Checkbox />} label="Boxing" />
                        <FormControlLabel onChange={categoryGetHandle} value='football' control={<Checkbox />} label="Disabled" />
                        <FormControlLabel onChange={categoryGetHandle} value='tennis' control={<Checkbox />} label="Tennis" />
                        <FormControlLabel onChange={categoryGetHandle} value='athletics' control={<Checkbox />} label="Athletics" />
                    </FormGroup>
                </>: null}

                {categoryCheck === 'news'? <>

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
                <input onChange={imageHandle} type='file' accept='image/*' className='w-full mb-5' />
            </Box>

            <Button onClick={HandlePost} variant='contained' >Post</Button>
        </FormGroup>

    </Box>
  )
}

export default Post
