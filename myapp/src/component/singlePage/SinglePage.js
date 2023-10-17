import { Avatar, Box, Button, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Cardbox from './Cardbox'
import SidebarRight from './../sidebarRight/SidebarRight';

const SinglePage = () => {
  return (
    <Box className='w-full flex flex-row justify-center pl-40 pr-40 sm:pl-0 sm:pr-0'sx={{paddingLeft:{xs:'2px', lg:'10rem'}, paddingRight:{xs:'2px', lg:'10rem'}}} > 
        <Box className='w-2/3 pr-10 sm:pr-5 sm:w-full' sx={{paddingLeft:{xs:'2px'}, paddingRight:{xs:'2px', lg:"2.5rem"}, width:{xs:'90%', lg:"100%"}}}>
          <CardMedia className='rounded-2xl w-full overflow-hidden mt-5 mb-5' sx={{objectFit:'cover', height:{xs:'400px', lg:'500px'}}}
                        component="img"
                        image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                        alt="green iguana"
                        />
            <Typography className='text text-justify'>
                However the specification actually allows other event-triggered code to continue to execute even though a modal
                dialog is still being shown. In such implementations, it is possible for other code to run while the modal dialog is
                being shown.
                More information about usage of the alert method can be found in the modals prompts topic.
                The use of alerts is usually discouraged in favour of other methods that do not block users from interacting with the
                page - in order to create a better user experience. Nevertheless, it can be useful for debugging.
                Starting with Chrome 46.0, window.alert() is blocked inside an 
            </Typography>
            <Box className='mt-10 flex flex-col'>
              <Typography sx={{fontSize:"18px", fontWeight:'bold'}}>Let us have your comment</Typography>
              <textarea rows={4} cols={5} className='w w-3/4 border border-1 hover:border-2 outline-0 pl-5 border-red-500 rounded-2xl'/>
              <Button variant='contained' color='error' className='t lowercase' sx={{width:'100px', marginTop:"10px"}} >comment</Button>
            </Box>
            
            <Box>
              <Cardbox/>
            </Box>
       </Box> 
      <SidebarRight/>
    </Box>
  )
}

export default SinglePage
