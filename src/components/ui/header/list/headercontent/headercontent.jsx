import React, { useLayoutEffect, useState } from 'react'
import './headercontent.css'
import { Avatar, Box, Divider, Drawer, IconButton, Link, List, ListItem, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBarEn, NavBarTn } from '../../data'
import Logo from '../../../../../assets/images/svg/menu_ta_svg.svg'
import Live from '../../../../../assets/images/svg/live.svg'
import LiveRes from '../../../../../assets/images/svg/liveres.svg'

const HeaderContent = () => {

 const theme = useTheme()
 const { t, i18n } = useTranslation();
 const language = i18n.language;    
 const navigate = useNavigate()
 const location = useLocation()
 const isMobile = useMediaQuery(theme.breakpoints.down('768'))  
 const navContent = language == 'en' ? NavBarEn : NavBarTn    
 const [isHover, setIsHover] = useState(false)
 const [isLanguage, setIsLanuage] = useState(language == 'en' ? true : false)
 const [isOpenNav, setIsOpenNav] = useState(false)
 const [isActive, setIsActive] = useState(0)

 const OnChangeLanguage = (lang, status) => () => {
   setIsLanuage(status)
   i18n.changeLanguage(lang)
 }

 const OnTaggleDrawer = (status) => ()  => {
  setIsOpenNav(status)
 }
   
 const OnNavigate  = (path) => () => {
   navigate(path)
   setIsActive(path) 
   setIsOpenNav(false)
 }

  useLayoutEffect(() => {
   if(location.pathname){
    setIsActive(location.pathname)  
   }
  },[]) 

  return (
   <>
    <div className='header cursor-pointer'>
     <div className="language_container">
     {isMobile ? <IconButton sx={{py:1.8, px:1.5}} size="small" onClick={OnTaggleDrawer(true)}><MenuOutlinedIcon sx={{color:'white', fontSize:16}}/></IconButton> : 
     <div className='flex items-center py-9 pl-5'>
      <div onClick={OnChangeLanguage("ta", false)} className={isLanguage ? "lanugage_content" : "lanugage_content_active" }>
        {!isLanguage && (
         <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
         </svg>
         )}
         <Typography variant='h5' fontWeight={isLanguage ? 400 : 600} pl={0.1}>தமிழ்</Typography>
       </div>
          
       <div onClick={OnChangeLanguage("en", true)} className={!isLanguage ? "lanugage_content" : "lanugage_content_active"}>
        {isLanguage && (
          <svg
                width='13'
                height='13'
                viewBox='0 0 13 13'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.34198 7.93735L3.06801 5.45318L2.95256 5.42839C1.60898 5.13984 0.404251 6.31104 0.65477 7.66222L4.34408 11.6926C5.04115 12.4541 6.27657 12.3221 6.79704 11.4305L12.5522 1.57193C13.0274 0.757915 11.8983 -0.0287562 11.2993 0.699021L5.34198 7.93735Z'
                  fill='#158219'
                />
           </svg>
         )}
         <Typography variant='h5' pt={'2px'} fontWeight={isLanguage ? 600 : 400} pl={0.1}>English</Typography>
       </div> 
      </div>
     } 
     </div>    
     
     <motion.div      
      initial={{ x: '100%'}} 
      animate={{ x: '-100%' }} 
      transition={{
        duration:24, 
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}>
      <Typography className={`text-white truncate cursor-pointer`} pt={language == 'en' ? '2px' : 0} fontWeight={450} variant='h5'>{t("header.name")}</Typography>
     </motion.div> 

     <div className='lanugage_yt_container'/>
     <Link underline='none' href="https://www.youtube.com/@ThenThirumalai"  target="_blank" rel="noopener noreferrer">
     {isMobile ? <Avatar src={LiveRes} alt='live' sx={{width:'80px', height:'auto', position:'absolute', right:5, top:10, zIndex:9999}} variant='square'/>
       :<Avatar src={Live} alt='live' sx={{width:'100px', height:'auto', position:'absolute', right:5, top:25, zIndex:9999}} variant='square'/>}
     </Link>
    </div>
     <Drawer open={isOpenNav} onClose={OnTaggleDrawer(false)}>
      <Box sx={{width:'185px'}} className='drawer'>
      <Avatar src={Logo} alt='logo' sx={{width:'95%', height:'auto', margin:'auto', p:'10px'}} variant='square'/> 
      <Divider sx={{bgcolor:'black', my:'3px', mx:'10px'}}/>
      <List>
       {navContent.map((nav, idx) => (
        <ListItem key={idx} disablePadding className='cursor-pointer' onClick={OnNavigate(nav.path)}>
         <Typography className={`${isActive == nav.path && 'bg-black text-white rounded-25'} py-2 px-8 pt-3`} variant='h5' mx={'6px'} my={idx == 0 ? 0 : 0.6}>{nav.name}</Typography>
        </ListItem> 
       ))}  
      </List>
     </Box>
    </Drawer>
   </>   
  )
}

export default HeaderContent