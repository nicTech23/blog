import { Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, MenuItem, Select, TextField, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Option } from '@mui/base/Option';

const Post = () => {
    const [category, setCategory] = useState(null)
    
    const CategoryHandleChange = (e) =>{
        setCategory(e.target.value)
    }

    console.log(category)
  return (
    <Box className=' m-auto p-10 items-stretch justify-center ' sx={{width:"60%"}}>
        <Box className='mb-6 self-center w-full flex items-center justify-center'>
            <span className='font-semibold text-5xl font-sans'>Post Story</span>
        </Box>
        <FormGroup>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Title</Typography>
                <input type='text' className='w-full border-2 border-sky-700 p-5 mb-5 outline-0'/>
            </Box> 
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Content</Typography>
                <Box  className=' border-2 border-sky-700 mb-5' sx={{width: "100%"}}>
                <TextareaAutosize className='w-full flex self-center border-0 outline-0 px-4' aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
                </Box>
            </Box>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Category</Typography>
                <select value={category} onChange={CategoryHandleChange} className='w-full border-2 border-sky-700 p-3 mb-5 outline-0' name="selectedOption">
                    <option value="">Select category of post</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                    <option value="news">News</option>
                    <option value="entertainment">Entertainment</option>
                </select>
            </Box>
            <Box className="mb-5">
                {category === 'sports'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel value='football' control={<Checkbox />} label="Football" />
                        <FormControlLabel value='boxing'required control={<Checkbox />} label="Boxing" />
                        <FormControlLabel value='football' control={<Checkbox />} label="Disabled" />
                        <FormControlLabel value='tennis' control={<Checkbox />} label="Tennis" />
                        <FormControlLabel value='athletics' control={<Checkbox />} label="Athletics" />
                    </FormGroup>
                </>: null}
                {category === 'news'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel value='news' control={<Checkbox />} label="News" />
                        <FormControlLabel value='education' control={<Checkbox />} label="Education" />
                        <FormControlLabel value='international' control={<Checkbox />} label="International" />
                        <FormControlLabel value='national' control={<Checkbox />} label="National" />
                        <FormControlLabel value='politics' control={<Checkbox />} label="Politics" />
                        <FormControlLabel value='regional' control={<Checkbox />} label="Reginal" />
                        <FormControlLabel value='technology' control={<Checkbox />} label="Technology" />
                        <FormControlLabel value='crime'required control={<Checkbox />} label="Crime" />
                    </FormGroup>
                </>: null}
                {category === 'business'? <>
                    <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                    <FormGroup>
                        <FormControlLabel value='economic' control={<Checkbox />} label="Economic" />
                        <FormControlLabel value='energy'required control={<Checkbox />} label="Energy" />
                        <FormControlLabel value='finance' control={<Checkbox />} label="Finance" />
                        <FormControlLabel value='mining' control={<Checkbox />} label="Mining" />
                        <FormControlLabel value='real estate' control={<Checkbox />} label="Real estate" />
                        <FormControlLabel value='agricultural' control={<Checkbox />} label="agricultural" />
                        <FormControlLabel value='Banking' control={<Checkbox />} label="Banking" />
                    </FormGroup>
                </>: null}
                {category === 'entertainment'? <>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story type</Typography>
                <FormGroup>
                    <FormControlLabel value='music' control={<Checkbox />} label="Music" />
                    <FormControlLabel value='movie'required control={<Checkbox />} label="Movie" />
                    <FormControlLabel value='radio' control={<Checkbox />} label="Radio" />
                    <FormControlLabel value='stage' control={<Checkbox />} label="Stage" />
                </FormGroup>
                </>: null}
            </Box>
            <Box className='mb-5'>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Popular</Typography>
                <FormControlLabel required control={<Checkbox />} label="Is popular" />
            </Box>
            <Box>
                <Typography sx={{fontWeight:'bold', fontSize:20}}>Story Picture</Typography>
                <input type='file' className='w-full mb-5' />
            </Box>
            <Button variant='contained' >Post</Button>
        </FormGroup>
    </Box>
  )
}

export default Post
