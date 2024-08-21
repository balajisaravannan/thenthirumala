import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import Others from '../pages/others/others'
import Panchangam from '../pages/panchangam/panchangam'
import TempleHistory from '../pages/temple history/temple history'
import Uthsavams from '../pages/uthsavams/uthsavams'
import NavbarContent from '../components/ui/navbar/navbar'
import Footer from '../components/ui/footer/footer'


const RouterSetup = () => {
  return (
   <BrowserRouter>
    <NavbarContent/>
    <Routes>
     {/* <Route path='/home' Component={Home}/>  */}
     <Route path='/other' Component={Others}/> 
     <Route path='/panchangam' Component={Panchangam}/> 
     <Route path='/templehistroy' Component={TempleHistory}/> 
     <Route path='/uthsams' Component={Uthsavams}/> 
     <Route path='/' Component={Home}/> 
    </Routes>
    <Footer/> 
   </BrowserRouter>
  )
}

export default RouterSetup