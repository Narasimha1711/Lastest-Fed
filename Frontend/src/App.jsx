import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './pages/Home'
import Context  from './Context'
import Signup from './pages/Signup'
import Login from './pages/Login'
import SellerLogin from './pages/SellerLogin'
import SellerSignup from './pages/SellerSignup'
// import SellerDashBoard from './pages/SellerDashBoard'
import Cart from './pages/Cart'
import SellerAddMedicine from './pages/SellerAddMedicine'
import SellerLayout from './Components/SellerLayout'
import YourInventory from './pages/YourInventory'
import Datatable from './pages/Datatable'
import Widgets from './pages/Widgets'
import SellerHome from './pages/SellerHome'
import UserSidebar from './Components/UserSidebar'
import UserYourinventory from './pages/UserYourinventory'

import UserHome from './pages/UserHome'
import UserUpdateUser from './pages/UserUpdateUser'
import { ToastContainer } from 'react-toastify'
// import SellerAddMedicine from './pages/SellerAddMedicine'


function App() {
  

  return (
    <>
    <ToastContainer />
    
    <Context>
      <Routes>
      <Route>

        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='sellerLogin' element={<SellerLogin />} />
        <Route path='sellersignup' element={<SellerSignup />} />
        {/* <Route path='sellerDashBoard' element={<SellerDashBoard />} /> */}
        

      </Route>

      
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='cart' element={<Cart />} />
          <Route path='userSidebar' element={<UserSidebar />}></Route>
          <Route path='userInventory' element={<UserYourinventory />}></Route>
          <Route path='userDashboard' element={<UserHome />}></Route>
          <Route path='userUpdatedetails' element={<UserUpdateUser />}></Route>
          {/* <Route path='userDashboard' element={<User />}></Route> */}

          {/* <Route path='sellerAddMedicine' element={<SellerAddMedicine />} /> */}

          {/* <Route path='signup' element={<Signup />}/>
          <Route path='login' element={<Login />}/>
          <Route path='sellerLogin' element={<SellerLogin />} />
          <Route path='sellersignup' element={<SellerSignup />} />
          <Route path='sellerDashBoard' element={<SellerDashBoard />} /> */}
          
        </Route>

        <Route path='/' element={<SellerLayout />}>

        <Route path='sellerAddMedicine' element={<SellerAddMedicine />} />
        <Route path='inventory' element={<YourInventory />} />
        <Route path='updateMedicine' element={<Datatable />} />
        <Route path='dashboard' element={<SellerHome />} />
          
        </Route>
          
        
      </Routes>
      </Context>
    </>
  )
}

export default App
