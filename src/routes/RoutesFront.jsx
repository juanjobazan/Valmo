import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Clientes from '../pages/Clientes'
import Product from '../pages/Product'

const RoutesFront = () => {
  return (
    <>
    
      <div className='d-flex'>
        <Sidebar />

        <div className='content w-100'>
        <NavbarC />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='clientes' element={<Clientes />} />
            <Route path='product' element={<Product />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default RoutesFront
