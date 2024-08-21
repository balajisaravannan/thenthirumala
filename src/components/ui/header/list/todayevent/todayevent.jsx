import React, { useEffect } from 'react'
import './todayevent.css'
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import moment from 'moment';
import axios from 'axios';

const tamilMonths = [
  "சித்திரை", 
  "வைகாசி",
  "ஆனி", 
  "ஆடி",
  "ஆவணி",
  "புரட்டாசி",
  "ஐப்பசி",
  "கார்த்திகை",
  "மார்கழி",
  "தை", 
  "மாசி",
  "பங்குனி" 
];

 const EngMonths = [
  "Chithirai",
  "Vaikasi", 
  "Aani", 
  "Aadi", 
  "Aavani",
  "Purattasi",
  "Aippasi",
  "Karthigai",
  "Margazhi",
  "Thai",
  "Masi",
  "Panguni"
];

const tamilDays = ["ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி"];
const enDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "thursday", "Friday", "Staturday"];


const TodayEvent = () => {
 const {t, i18n } = useTranslation()   
 const currentLanguage = i18n.language; 
 const ldata = currentLanguage == 'en' ? EngMonths : tamilMonths
 const lday = currentLanguage == 'en' ? enDays : tamilDays

 const getTamilDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth(); 
  const dayIndex = date.getDay();
  const tamilMonthIndex = (month + 9) % 12; 
  return {
    month: ldata[tamilMonthIndex],
    day: day,
    dayname : lday[dayIndex]
  };
};


const { month, day, dayname } = getTamilDate()
        
  return (
   <div className='flex flex-col' style={{marginBlockStart:'30px'}}>
    <div className='todayList'>
     <div className='todayList-content '>
      <Typography className='text-yellow-500' variant='h5' fontWeight={500}>{currentLanguage == 'en' ? "Today" : "இன்று" }</Typography>
      <Typography className='text-white w-20' mb={1.4} mt={0.5} variant='h6' fontWeight={400} lineHeight={1.3}>{moment(new Date()).format('DD-MM-YYYY') } {month + " " + day }</Typography>
      <Typography className='text-white w-20' lineHeight={1.4} mb={2} variant='h6' fontWeight={400}>{dayname} {currentLanguage == 'en' ? 'Swati Kri. Pak. Navami' : 'ஸ்வாதி கி.ப. நவமி' }</Typography>
     </div>
    </div>
   </div> 
  )
}

export default TodayEvent