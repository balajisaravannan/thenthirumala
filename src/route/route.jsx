import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import Others from '../pages/others/others'
import Panchangam from '../pages/panchangam/panchangam'
import TempleHistory from '../pages/temple history/temple history'
import Uthsavams from '../pages/uthsavams/uthsavams'
import NavbarContent from '../components/ui/navbar/navbar'
import Footer from '../components/ui/footer/footer'
import { CircularProgress } from '@mui/material'
import Prayerhall from '../pages/prayer hall/prayerhall'
import Header from '../components/ui/header/header'


const RouterSetup = () => {
  return (
    <>
   <BrowserRouter>
    <Header/>
    <div className="w-full sticky" style={{ zIndex: 99, top:44}}>
     <NavbarContent/>
    </div>
    <Suspense fallback={<div className='grid place-content-center w-full h-screen'><CircularProgress size={20}/></div>}> 
    <Routes>
     {/* <Route path='/home' Component={Home}/>  */}
     <Route path='/other' Component={Others}/> 
     <Route path='/panchangam' Component={Panchangam}/> 
     <Route path='/templehistroy' Component={TempleHistory}/> 
     <Route path='/uthsams' Component={Uthsavams}/> 
     <Route path='/prayerhall' Component={Prayerhall}/>
     <Route path='/' Component={Home}/> 
    </Routes>
    </Suspense> 

   </BrowserRouter>
    <Footer/> 
   </>
  )
}

export default RouterSetup