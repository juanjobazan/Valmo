import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.css"
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import * as Faicons from 'react-icons/fa'
import { Formik } from 'formik';
import loginSchema from '../helpers/validationSchemaYupLogin';
import clienteAxios from '../utils/axiosCliente';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom'

const NavbarC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate()

  const sendFron = async (values) => {
   
    try {
      
      const res = await clienteAxios.post('/login/',values)
      console.log(res.data.role)
     if(res.data.role ==='user'){
       navigate('/ProductAdmin')
     }
      handleClose(true)
    } catch (error) {
     Swal.fire({
      icon:'error',
      title:'Ooopss..',
      text:'Usuario y/o Contraseña incorrecta'
     })
    }
  }

  return (
    <>
      <Formik
        initialValues={{ correo_usuario: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={(values) => sendFron(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
        }) => (
          <Navbar expand="lg" className="NavbarC bg-body-tertiary">
            <Container >
              <Navbar.Brand href="#home">Logo</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <NavLink to={"/createNuevoProduct"} className={'nav-link'}>Nuevo Producto</NavLink>
                  <NavLink to="/ProductAdmin" className={'nav-link'}>BM Productos</NavLink>
                  <NavLink to="/servicio" className={'nav-link'}>Servicios</NavLink>
                  <NavLink to="/compra" className={'nav-link'}>Mis Reservas</NavLink>

                </Nav>
                <Nav className='ms-auto'>
                  <Button className='btn btn-outline-light nav-link text-dark  mx-5' onClick={handleShow}>
                    Iniciar Session
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Inicio de Session</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label><Faicons.FaUser className='me-2' />Usuario</Form.Label>
                          <Form.Control type="email" placeholder="name@example.com" name='correo_usuario' value={values.correo_usuario} className={errors.correo_usuario && touched.correo_usuario && 'is-invalid'} onChange={handleChange} maxLength={60} />
                          <small className='text-danger'>{errors.correo_usuario && touched.correo_usuario && errors.correo_usuario}</small>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                          <Form.Label><Faicons.FaKey className='me-2' /> Password</Form.Label>
                          <Form.Control type="password" placeholder="xxxxxxxxxxx" name='password' value={values.password} className={errors.password && touched.password && 'is-invalid'} onChange={handleChange} maxLength={40} />
                          <small className='text-danger'>{errors.password && touched.password && errors.password}</small>
                        </Form.Group>
                      </Form>
                    </Modal.Body>
                    <Modal.Footer>

                      <NavLink to="/createUser" className="nav-link text-center">Registrate</NavLink>
                      <Button variant="primary" type='submit' onClick={handleSubmit}>
                        iniciar Session
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )}

      </Formik>

    </>
  )
}

export default NavbarC
