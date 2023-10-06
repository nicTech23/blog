import React from 'react'
import PropTypes from 'prop-types'
import { Button, CardContent, CardMedia, Typography, CardActions, Card, Box } from '@mui/material'

const Cardbox = props => {
  return (
    <Box className='grid grid-cols-3 w-screen'>
      <Card sx={{ maxWidth: 350, objectFit:'cover' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptile3s, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <span>60</span>
        <span>comment</span>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 350, objectFit:'cover' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <span>60</span>
        <span>comment</span>
      </CardActions>
    </Card>
    </Box>
  )
}

Card.propTypes = {

}

export default Cardbox
