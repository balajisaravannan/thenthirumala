import React from 'react'
import './uthsavamsContent.css'
import { Avatar, Typography } from '@mui/material'
import Text from '../../../../assets/images/svg/uthsavamhtxt.svg'
import { useTranslation } from 'react-i18next'

const UthsavamsContent = () => {
 const { t } = useTranslation()
    
  return (
    <div>
     <div className='uthsavams_header'>
      <Avatar src={Text} sx={{width:'180px', height:'auto', position:'absolute', bottom:20}} alt='txt' variant='square'/>
     </div>

     <div className='uthsavam_content'>
      <Typography variant='h6'>{t('uthsavams:content')}</Typography>   
     </div>   
     
    </div>
  )
}

export default UthsavamsContent