import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Faicons from 'react-icons/fa'
import "../css/sidebar.css"
const Sidebar = () => {
  return (
    <div className='sidebar bg-ligth'>
      <ul>
        <li>
            <NavLink to="/" exact className='text-dark rounded py-2 w-100  d-inline-block px-3' activeClassName="active"><Faicons.FaHome className='me-2'/>Inicio</NavLink>
        </li>
        <li>
            <NavLink to="/clientes" exact  className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName="active"><Faicons.FaCartArrowDown className='me-2'/>Carrito</NavLink>
        </li>
        <li>
            <NavLink to="/product" exact  className='text-dark rounded py-2 w-100 d-inline-block px-3' activeClassName="active"><Faicons.FaUser className='me-2'/>Clientes</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
