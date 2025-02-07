import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavbarC from '../components/NavbarC'
import Sidebar from '../components/Sidebar'
import Home from '../pages/Home'
import Clientes from '../pages/Clientes'
import Product from '../pages/Product'
import Login from '../components/LoginC'
import Footer from '../components/Footer'
import Error from '../pages/Error'
import Carrousel from '../components/Carrousel'
import Adminproduct from '../pages/Adminproduct'
import CreateProduct from '../pages/CreateProduct'
import ProductAdminPage from '../pages/ProductAdminPage'
import CreateUser from '../pages/CreateUser'
const RoutesFront = () => {
  return (
    <>


      <Sidebar />

      <div className='content w-100'>
        <NavbarC />
        <Carrousel />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />} />
          <Route path='/clientes' element={<Clientes />} />
          <Route path='/productos/:id' element={<Product />} />
          <Route path='/*' element={<Error />} />
          <Route path='/adminProduct' element={<Adminproduct/>}/>
          <Route path='/createNuevoProduct' element={<CreateProduct/>}/>
          <Route path='/ProductAdmin' element={<ProductAdminPage/>}/>
          <Route path='/createUser' element={<CreateUser/>}/>

        </Routes>
        <Footer />
      </div>

    </>
  )
}

export default RoutesFront
