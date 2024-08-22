import React from 'react'
import './eventlist.css'
import { useTranslation } from 'react-i18next';
import { Avatar, Typography } from '@mui/material';
import One from '../../../../../assets/images/png/1.jfif'; 

const EventList = () => {
 const {t} = useTranslation()   
 const headerContent = t('header.event', { returnObjects: true }) || [];    

  return (
   <div className='h-full flex justify-end flex-col' style={{height: "100vh",justifyContent: "center"}}>
    {Array.isArray(headerContent) && headerContent.map((item, idx) => (
     <div className='eventlist'>
      <div className='eventlist-content'>
      <Avatar variant='square' src={One} alt='logo' sx={{width:'100%', height:'auto', borderRadius:'12px'}}/>
      <div className='p-5'>
      <Typography className='text-yellow-500' variant='h5' fontWeight={600} fontSize="1rem">{item?.title}</Typography>
      <Typography className='text-white' variant='h6' fontWeight={400}>{item?.content}</Typography>   
     </div>
      </div>  
     </div>
    ))}     
   </div>
  )
}

export default EventList

