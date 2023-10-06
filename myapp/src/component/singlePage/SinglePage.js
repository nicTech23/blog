import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import Cardbox from './Cardbox'

const SinglePage = () => {
  return (
    <div className='flex flex-col w-full'>
      <span className='text-xl font-sans font-bold'> IT system is solid: NPP Can't much us in 2024 - Oman Boamah</span>
      <CardMedia className='rounded-2xl w-full overflow-hidden mt-5 mb-5' sx={{height: '500px', objectFit:'cover'}}
                    component="img"
                    image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                    alt="green iguana"
                    />
        <Typography>
            However the specification actually allows other event-triggered code to continue to execute even though a modal
            dialog is still being shown. In such implementations, it is possible for other code to run while the modal dialog is
            being shown.
            More information about usage of the alert method can be found in the modals prompts topic.
            The use of alerts is usually discouraged in favour of other methods that do not block users from interacting with the
            page - in order to create a better user experience. Nevertheless, it can be useful for debugging.
            Starting with Chrome 46.0, window.alert() is blocked inside an 
        </Typography>
    </div>
  )
}

export default SinglePage
