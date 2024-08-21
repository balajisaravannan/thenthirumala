import { Avatar, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import ThiruMala from '../../../../../assets/images/png/thirumanlogo.png'
import Tamil from '../../../../../assets/images/png/tamilbig.svg'
import English from '../../../../../assets/images/png/engbig.svg'
import Stamil from '../../../../../assets/images/png/smalltamiltxt.svg'
import Seng from '../../../../../assets/images/png/smalltxt.svg'
import Logo from '../../../../../assets/images/png/perumal.svg'
import { useTranslation } from 'react-i18next'
import './maincontent.css'

const MobileMaincontent = () => {
 const theme = useTheme()
 const {t, i18n} = useTranslation()  
 const isRes = useMediaQuery(theme.breakpoints.down('420')) 
 const Lanuage = i18n.language;

  return (
    <div className='flex flex-col items-center' style={{zIndex:9}}>
     <div className='header-mobile-ellipsi'/> 
     <Avatar variant='square' src={ThiruMala} sx={{width:'150px', height:'auto', my:'3px', mb:Lanuage == 'en' ? '20px' : '3px', zIndex:2}}/>
     <Avatar variant='square' src={Lanuage == 'en' ? English : Tamil} sx={{width:isRes ? '85%' : '60%', height:'auto', my:'3px',zIndex:2}}/>
     <Avatar variant='square' src={Lanuage == 'en' ? Seng : Stamil} sx={{width:isRes ? '55%' : '40%', height:'auto', mt:Lanuage == 'en' ?'15px' : '3px', zIndex:2}}/>
     <Avatar variant='square' src={Logo} sx={{width:isRes ? '90%' :'410px', height:'auto', position:'absolute', bottom:'0px', pt:'10px', px:'10px',zIndex:2 }}/>
    </div>
  )
}

export default MobileMaincontent