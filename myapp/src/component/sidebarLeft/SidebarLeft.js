import React from 'react'
import SidebarLink from '../sidebarLink/SidebarLink'
import FeedIcon from '@mui/icons-material/Feed'
import GavelIcon from '@mui/icons-material/Gavel'
import BusinesslIcon from '@mui/icons-material/Business'
import SportsKabaddilIcon from '@mui/icons-material/SportsKabaddi'
import SportsBaseballlIcon from '@mui/icons-material/SportsBaseball'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import BiotechlIcon from '@mui/icons-material/Biotech'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import { Box } from '@mui/material';

const SidebarLeft = () => {
 
  return (
    <div className='h-screen relative'>
      <Box className='bg-white lg:w-2/12  ' sx={{display:{xs:'none', lg:'block'}}}>
      <div className='lg:flex flex-col w-full sticky top-0'>
          <SidebarLink  icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='News' link='news' className='News' />
          <SidebarLink icon = {<GavelIcon style={{fontSize:'18px'}}/>}  text='Politic' link='politics' className='Politics'  />
          <SidebarLink icon = {<BusinesslIcon style={{fontSize:'18px'}}/>}  text='Business' link='business' className='Business'  />
          <SidebarLink icon = {<SportsKabaddilIcon style={{fontSize:'18px'}}/>}  text='Entertainments' link='intertainment' className='Entertainments'  />
          <SidebarLink icon = {<SportsBaseballlIcon style={{fontSize:'18px'}}/>}  text='Sports' link='sport' className='Sport'  />
          <SidebarLink icon = {<LocalHospitalIcon style={{fontSize:'18px'}}/>}  text='Health' link='health' className='Health'  />
          <SidebarLink icon = {<BiotechlIcon style={{fontSize:'18px'}}/>}  text='Technology' link='technology' className='Technology'  />
          <SidebarLink icon = {<Diversity3Icon style={{fontSize:'18px'}}/>}  text='Opinion' link='opinion' className='Opinion' />
          <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Lifestyle' link='lifestyle'  className='Lifestyle' />
          <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Gallery' link='gallery' className='Gallery'  />
          <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Obituary' link='obituary' className='Obituary'  />
        </div>
      </Box>
    </div>
  )
}

export default SidebarLeft
