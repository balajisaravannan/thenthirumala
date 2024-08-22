import React, { useEffect, useState } from 'react'
// import Background from '../../../assets/images/svg/footer.svg'
import Background from '../../../assets/images/svg/kopuram.svg'

import Youtube from '../../../assets/images/png/yt.png'
import { useTranslation } from 'react-i18next'
import { Avatar, Box, Skeleton, styled, Typography, useMediaQuery, useTheme } from '@mui/material'
import './footer.css';
import { motion } from "framer-motion";

const Footer = () => {
 const { t , i18n } = useTranslation()
 const theme = useTheme()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768')) 
 const isPc = useMediaQuery(theme.breakpoints.up('1200')) 
 const cur_lang = i18n.language
 const [isLoading, setIsLoading] = useState(true)

 const Condent = styled(Box)({ 
  borderRadius:'16px',
  width: '260px',
  height:'145px',
  color:'white',
  overflowY: 'scroll',
  backgroundColor:'white'
 })

 useEffect(() => {
  setTimeout(() => {
   setIsLoading(false)
  },2000)
 },[])

  return (
    <div className='relative w-full' style={{  background: 'linear-gradient(90deg, #9B5EB0 0%, #06111F 100%)'}}>     
    <div className='relative' style={{maxWidth:'1200px', margin:'auto'}}>
     <div className={`h-auto p-10 ${isResponsive ? '' :'flex justify-between'}`} style={{paddingBlockStart:'25px'}}>
       <div className={isResponsive ? 'w-3/4' : 'ml-48'} style={{minWidth:!isResponsive && '145px', maxWidth:!isResponsive &&'45%'}}>
       <Typography variant='h5' color={theme.palette.common.white} fontWeight={500}>{t('footer.subtitle')}</Typography>
        <div className='mt-10'>
         <Typography variant='h5' className='text-yellow-500' fontWeight={500}>Devastanam P.R.O</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={500}>Phone: +91 4254 304 300</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={500}>Mobile: 98422 67776</Typography>  
         <Typography variant='h5' className='text-yellow-500' fontWeight={500}>Fax : +91 4254 304 400</Typography>  
        </div>
       </div>
       
       <div className={isResponsive ? 'flex justify-end' : 'mt-1'}>
        <div className={isResponsive ? 'w-36 text-right' : 'w-72'}> 
        <Typography variant='h5' className='text-yellow-500' fontWeight={500}>தென் திருமலை, </Typography>  
        <Typography variant='h5' className='text-white' fontWeight={350}>சிறுமுகை ரோடு, மேட்டுப்பாளையம், கோயம்புத்தூர், தமிழ் நாடு, இந்தியா.</Typography>  
        </div>

        {isResponsive ? null :          
          isLoading ? <Skeleton width='100%' height='145px' sx={{bgcolor:'white', borderRadius:'15px', marginBlockStart:'12px'}} variant="rectangular" /> :<motion.div className='box-container mt-8'><Condent className='mt-1'><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.4859377585963!2d76.98550277334138!3d11.299149249338027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ef6b24e8df69%3A0x358d0da9196ed11f!2sThen%20Tirupati%20Tirumala%20Srivari%20Ananda%20Nilayam!5e0!3m2!1sen!2sin!4v1722834088863!5m2!1sen!2sin" width="100%" style={{borderRadius:'14px'}} height="145" onLoad={()=>setIsLoading(false)} loading="lazy"></iframe></Condent>
        </motion.div>
        }

       </div>

       </div> 
       </div>

      <div className={`relative bg-primary w-screen p-10`}>
  
      <div className='relative' style={{maxWidth:'1200px', width:'100%', margin:'auto'}}>
      <img src={Background} alt='templ' className={`${isResponsive ? ' w-24' : 'w-52 mr-52'} h-auto z-1 absolute bottom-0 left-0`} style={{bottom:'-10px'}}/>
      <div className={isResponsive ? 'pl-10 items-center flex justify-end' : 'pl-52 items-center flex'}>
      <img src={Youtube} className='w-7 h-7 cursor-pointer mx-8'/>  
       {isResponsive ? null : <Typography variant='h5' className='text-white ml-5 pt-2'>{t('footer.name')}</Typography>}
      </div>
      </div>
      </div>     
    
     
    </div>
    )
}

export default Footer