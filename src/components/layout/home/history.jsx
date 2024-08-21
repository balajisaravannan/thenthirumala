import { Avatar, Typography, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import HistroyLogo from '../../../assets/images/png/home/histroy.png'
import { motion } from 'framer-motion';

const History = () => {
 const {t, i18n} = useTranslation()  
 const theme = useTheme()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768'))
 const cur_lang = i18n.language
 const [isVisible, setIsVisible] = useState(false)

 const OnMoreData = (content) => () => {
  setIsVisible(content)
 }

  return (
    <div className={isResponsive ? 'p-10 bg-white' :'px-14  bg-white'} style={{paddingBlock:isResponsive ? '10px' : '30px', maxWidth:' 1200px',margin: 'auto'}}>
     <Typography variant='h6' fontWeight={450}>{t('contentone')}</Typography>   
     <Typography variant='h6' mt={1} fontWeight={450}>{t('contentSec')}</Typography>   
     {isVisible && 
      <motion.div className='mt-12 flex flex-wrap' initial={{x:'-100%'}} animate={{ x: isVisible ? 0 : '-100%' }} transition={{ type: 'spring', stiffness: 50 }}>
       <Avatar variant='square' src={HistroyLogo}  style={{minWidth:'160px', maxWidth:'210px', height:'auto', width:'100%'}}/>  
       <div className='ml-6'>
       {cur_lang == 'ta' ? 
        <>
        <div className='flex'>
         <Typography variant='h6' fontWeight={450}>மூலவர் </Typography>   
         <Typography variant='h6' fontWeight={600} ml={1}>: திருவேங்கடமுடையான்</Typography>   
        </div>

        <div className='flex'>
         <Typography variant='h6' fontWeight={450}>உத்சவர் </Typography>   
         <Typography variant='h6' fontWeight={600} ml={0.4}>: ஸ்ரீ பாலாஜி</Typography>   
        </div>

        <div className='flex'>
         <Typography variant='h6' fontWeight={450}>தாயார் </Typography>   
         <Typography variant='h6' fontWeight={600} ml={1}>: பத்மாவதி</Typography>   
        </div>
        </> 
       :
       <>
       <div className='flex'>
        <Typography variant='h6' fontWeight={450}>மூலவர் </Typography>   
        <Typography variant='h6' fontWeight={600} ml={1}>: திருவேங்கடமுடையான்</Typography>   
       </div>

       <div className='flex'>
        <Typography variant='h6' fontWeight={450}>உத்சவர் </Typography>   
        <Typography variant='h6' fontWeight={600} ml={0.4}>: ஸ்ரீ பாலாஜி</Typography>   
       </div>

       <div className='flex'>
        <Typography variant='h6' fontWeight={450}>தாயார் </Typography>   
        <Typography variant='h6' fontWeight={600} ml={1}>: பத்மாவதி</Typography>   
       </div>
       </> 
       }
      </div>
     </motion.div>}
     <div className='flex justify-end'>
     {isVisible ? <Typography variant='h6' onClick={OnMoreData(false)} className='text-blue-600 cursor-pointer w-56' align='right'>{cur_lang == 'en' ? 'Hide Content...' : 'உள்ளடக்கத்தை மறை...'}</Typography> : <Typography variant='h6' onClick={OnMoreData(true)} className='text-blue-600 cursor-pointer w-32' align='right'>{cur_lang == 'en' ? 'Read More...' : 'மேலும் படிக்க...'}</Typography>}
     </div>
    </div>
  )
}

export default History