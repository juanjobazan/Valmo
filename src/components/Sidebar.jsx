import React from 'react'
import { NavLink } from 'react-router-dom'
import * as Faicons from 'react-icons/fa'
import { slide as Menu } from 'react-burger-menu'
import "../css/sidebar.css"


const Sidebar = () => {
  
  return (
    <div className='sidebar '>
      <Menu>

        <ul>
          <li>
            <NavLink to="/" exact className='text-light rounded py-2 w-100  d-inline-block px-3'><Faicons.FaHome className='me-2' />Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/clientes" exact className='text-light rounded py-2 w-100 d-inline-block px-3' ><Faicons.FaCartArrowDown className='me-2' />Carrito</NavLink>
          </li>
          <li>
            <NavLink to="/product" exact className='text-light rounded py-2 w-100 d-inline-block px-3'><Faicons.FaUser className='me-2' />Clientes</NavLink>
          </li>
        </ul>
      </Menu>
    </div>
  )
}

export default Sidebar
