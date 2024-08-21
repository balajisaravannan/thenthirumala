import { Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next'
import History from '../../components/layout/home/history'
import Slider from '../../components/layout/home/slider'
import CustomizeYt from '../../components/layout/home/youtube'

const Home = () => {
 const {t} = useTranslation()  
 
 console.log(t("one"))

  return (
    <>
     <div className='relative w-full' style={{backgroundColor:'#EFEFEF'}}>
      <History/>
      <Slider/>
      <CustomizeYt/>
     </div>
    </>
  )
}

export default Home