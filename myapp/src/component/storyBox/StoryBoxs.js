import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

const StoryBoxs = ({storyType, fetch, storyCategory}) => {
    const storyCat = storyCategory
    const data = useSelector((state)=> state.allPostData[storyCat].data.data)
    const status = useSelector((state)=> state.allPostData[storyCat].status)
    
    const dispatch = useDispatch()
    console.log(status)
    //Function to get only crime stories
    const returnFiltterData = ()=>{
      if(data){
        console.log(data)
        return data.filter(item => item.category.some(category => category.storytypes.includes(storyType) && category.name === storyCat));
      }
    }
    
  const filterData = returnFiltterData();
  
    useEffect(()=>{
      if(status === 'idle'){
        dispatch((fetch()))
    console.log(status)

      }
    }, [data, dispatch, fetch, status])

    console.log(status)

      
    return (
      <Box className='w-full grid lg:grid-cols-4 gap-4 sm:grid-cols-2'>
            {
              filterData?.map(data =>{
                let url = `/${data.category[0].name}/${data.category[0].mainstory}/${data.title}`
                return(
                  <Link key={data._id} to={url}>

                    <Box className='bg-gray-200 cursor-pointer h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out'>
                        <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                                    component="img"
                                    image="https://www.graphic.com.gh/images/2022/jan/04/akufo_addo1.jpg"
                                    alt="green iguana"
                                    />

                        <Box  className='m-3 overflow-hidden'>
                          <span className='text-sm'>{data.content}</span>
                        </Box>

                    </Box>
                    
                  </Link>
                )
              })
            }
      </Box>
    )
}

export default StoryBoxs
