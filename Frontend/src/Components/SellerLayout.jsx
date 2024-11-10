import React from 'react'
import SellerHeader from './SellerHeader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const SellerLayout = () => {
  return (
    <div>

     <SellerHeader />
      <Outlet />
      <Footer />

    </div>
  )
}

export default SellerLayout
