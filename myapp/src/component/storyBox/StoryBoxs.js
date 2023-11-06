import { Box, CardMedia } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'

const StoryBoxs = ({storyType, fetch, storyCategory}) => {
    const storyCat = storyCategory
    const data = useSelector((state)=> state.allPostData[storyCat].data.data)
    const status = useSelector((state)=> state.allPostData[storyCat].status)
    
    const dispatch = useDispatch()
    console.log('ss', data)
    //Function to get only crime stories
    const returnFiltterData = ()=>{
      if(data){
        console.log(data)
        const newdata = data.filter(item => item.type === storyType);
        return newdata
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
                let url = `/${data.category}/${data.type}/${data.title}`
                return(
                  <Link key={data._id} to={url}>

                    <Box className='bg-gray-200 cursor-pointer h-64 overflow-hidden hover:bg-red-600 hover:text-white trasnsition ease-in-out flex flex-col justify-around'>
                        {/* <CardMedia className=''sx={{height:170, objectFit:'cover'}}
                                    component="img"
                                    image={`http://localhost:8080/image/${data.image}`}
                                    alt="green iguana"
                                    /> */}
                        <Box className='w-full cursor-pointer h-[150px] '>
                          <img className='object-fill h-full w-full' src={`http://localhost:8080/image/${data.image}`}/>
                        </Box>

                        <Box  className='px-3'>
                          <span className='text-lg font-bold mt-3'>{data.title.split('-').join(' ')}</span>
                        </Box>

                        <Box  className=' px-3 mb-5'>
                          <span className='text-base' dangerouslySetInnerHTML={{__html: data.content.substring(0,100)}}/>
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
