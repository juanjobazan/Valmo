import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as Faicons from 'react-icons/fa'


const CreateUser = () => {
  return (
    <>
     <div className="container p-4">
         <div className='row'>
             <div className='col-md-4 mx-auto'>
                 <div className='card text-center'>
                     <div class="card-header">
                         <h3 class="text-uppercase">Nuevo Usuario</h3>
                     </div>
                     <div className='card-body'>
                         <Form className="">

                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaTextWidth className='me-2'/>Nombre</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese su Nombre" name='nombre'  onChange='' maxLength={18} />
                                 <small className='text-danger'></small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaTextWidth className='me-2'/>Apellido</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese su Apellido" name='nombre'  onChange='' maxLength={18} />
                                 <small className='text-danger'></small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaAddressCard className='me-2'/>D.N.I</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese su D.N.I" name='nombre'  onChange='' maxLength={18} />
                                 <small className='text-danger'></small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaAt className='me-2'/>Correo</Form.Label>
                                 <Form.Control type="number" placeholder="Ingrese su Correo" name='precio'  onChange='' maxLength={18} />
                                 <small className='text-danger'></small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaKey className='me-2'/>Password</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese su Password"  name='urlImagen'/>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaKey className='me-2'/>Repetir Password</Form.Label>
                                 <Form.Control type="text" placeholder="Repetir Password"  name='urlImagen'/>
                             </Form.Group>
                             <Button variant="primary" type="submit" className='w-100 my-3' onClick=''>
                                 Crear
                             </Button>
                         </Form>
                     </div>

                 </div>

             </div>

         </div>

     </div>
    </>
  )
}

export default CreateUser
