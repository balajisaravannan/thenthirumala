import { Avatar, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
// import ThiruMala from '../../../../../assets/images/png/thirumanlogo.png'
import ThiruMalaLogo from "../../../../../assets/images/svg/tirupati-thiruman_full.svg"
import Tamil from '../../../../../assets/images/png/tamilbig.svg'
import English from '../../../../../assets/images/png/engbig.svg'
import Stamil from '../../../../../assets/images/png/smalltamiltxt.svg'
import Seng from '../../../../../assets/images/png/smalltxt.svg'
import Logo from '../../../../../assets/images/png/perumal.svg'
import { useTranslation } from 'react-i18next'

const MainContent = () => {
 const theme = useTheme() 
 const {t, i18n} = useTranslation()  
 const isRes = useMediaQuery(theme.breakpoints.down('1024')) 
 const Lanuage = i18n.language;
  return (
    <div className='flex flex-col items-center' style={{zIndex:'2'}}>
     <Avatar variant='square' src={ThiruMalaLogo} sx={{width:'150px', height:'auto', my:'3px', mb:Lanuage == 'en' ? '20px' : '3px'}}/>
     <Avatar variant='square' src={Lanuage == 'en' ? English : Tamil} sx={{width:'48%', height:'auto', my:'3px'}}/>
     <Avatar variant='square' src={Lanuage == 'en' ? Seng : Stamil} sx={{width:'25%', height:'auto', mt:Lanuage == 'en' ?'15px' : '3px'}}/>
     <Avatar variant='square' src={Logo} sx={{width:'32%', height:'auto', position:'absolute', bottom:'0px', pt:'10px', px:'10px'}}/>
    </div>
  )
}

export default MainContent