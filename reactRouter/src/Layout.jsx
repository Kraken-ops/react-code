import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import { Outlet } from 'react-router-dom'
import FooterComponent from './components/FooterComponent'

function Layout() {
  return (
    <>
    <HeaderComponent />
    <Outlet />
    <FooterComponent />
    
    </>
  )
}

export default Layout