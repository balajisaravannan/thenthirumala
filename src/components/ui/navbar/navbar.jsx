import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import { useLocation, useNavigate } from 'react-router-dom'
import background from '../../../assets/images/png/navbarbg.png'
import { useTranslation } from 'react-i18next'
import { Typography, useMediaQuery, useTheme } from '@mui/material'

const NavbarContent = () => {
 const navbarData = [
  {
   name:'Home',
   path : '/' 
  },
  {
   name :'Temple History',
   path : '/templehistroy'  
  },
  {
   name :'Uthsavams',
   path : '/uthsams'   
  },
  {
    name :'Panchangam',
    path : '/panchangam'     
  },
  {
    name :'Others',
    path : '/other'  
  }    
 ]    
 const navbarTwo = [
    {
     name:'முகப்பு',
     path : '/' 
    },
    {
     name :'திருக்கோவில் சரிதம்',
     path : '/templehistroy'  
    },
    {
     name :'உத்ஸவங்கள்',
     path : '/uthsams'   
    },
    {
      name :'பஞ்சாங்கம்',
      path : '/panchangam'     
    },
    {
      name :'மற்றவை',
      path : '/other'  
    }    
   ]    
 const theme = useTheme()  
 const navigate = useNavigate()
 const location = useLocation()
 const {i18n} = useTranslation()
 const isResponsive = useMediaQuery(theme.breakpoints.down('768')) 
 const lanuage = i18n.language;
 const data = lanuage == 'en' ? navbarData : navbarTwo;
 const [isSticky, setIsSticky] = useState(false);

 const handleScroll = () => {
  const headerHeight = 550; 
  if (window.scrollY > headerHeight) {
    setIsSticky(true);
  } else {
    setIsSticky(false);
  }
};

useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
   <>
   <Header/>
    <div style={{backgroundImage:`url(${background})`, zIndex:99, top:isSticky ? '44px' : 0 }}  className={`w-full flex justify-center items-center p-6 bg-no-repeat bg-cover ${isSticky ? 'fixed top-12' : 'relative'}`}>
    {isResponsive ? <div className='p-5'/> : data?.map((nav, idx) => (
     <div key={idx} className={location.pathname == nav.path ? 
       'bg-black text-white flex mx-6 cursor-pointer py-3 items-center rounded-15' : 
       'flex mx-6 cursor-pointer py-3 items-center rounded-15'
     }
     onClick={() => navigate(`${nav.path}`)}
      >
      <Typography variant='h5' className='px-12 pt-1'>{nav.name}</Typography>  
     </div>   
    ))}
    </div>
   </>
  )
}

export default NavbarContent