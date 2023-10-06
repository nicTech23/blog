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
    <Box className='bg-white w-2/12'>
    <div className='h-screen fixed'>
      <div className='text-2xl text-red-500 font-sans font-black mb-5'>Logo</div>
        <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='News' className='News' />
        <SidebarLink icon = {<GavelIcon style={{fontSize:'18px'}}/>}  text='Politic' className='Politics'  />
        <SidebarLink icon = {<BusinesslIcon style={{fontSize:'18px'}}/>}  text='Business' className='Business'  />
        <SidebarLink icon = {<SportsKabaddilIcon style={{fontSize:'18px'}}/>}  text='Entertainments' className='Entertainments'  />
        <SidebarLink icon = {<SportsBaseballlIcon style={{fontSize:'18px'}}/>}  text='Sport' className='Sport'  />
        <SidebarLink icon = {<LocalHospitalIcon style={{fontSize:'18px'}}/>}  text='Health' className='Health'  />
        <SidebarLink icon = {<BiotechlIcon style={{fontSize:'18px'}}/>}  text='Technology' className='Technology'  />
        <SidebarLink icon = {<Diversity3Icon style={{fontSize:'18px'}}/>}  text='Opinion' className='Opinion' />
        <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Lifestyle'  className='Lifestyle' />
        <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Gallery' className='Gallery'  />
        <SidebarLink icon = {<FeedIcon style={{fontSize:'18px'}}/>}  text='Obituary' className='Obituary'  />
      </div>
    </Box>
  )
}

export default SidebarLeft
