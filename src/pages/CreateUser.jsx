import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as Faicons from 'react-icons/fa'


const CreateUser = () => {
    return (
        <>
            <Formik
                initialValues={{ nombre: '', apellido: '', dni: '', correo: '', password: '', tipo: 'user' }}
                validationSchema={''}
                onSubmit={(values) => sendFron(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
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
                                                <Form.Label><Faicons.FaTextWidth className='me-2' />Nombre</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese su Nombre" name='nombre' value={values.nombre} className={errors.nombre && touched.nombre && 'is-invalid'} onChange={handleChange} maxLength={18} />
                                                <small className='text-danger'>{errors.nombre && errors.touched && errors.nombre}</small>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><Faicons.FaTextWidth className='me-2' />Apellido</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese su Apellido" name='nombre' onChange='' maxLength={18} />
                                                <small className='text-danger'></small>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><Faicons.FaAddressCard className='me-2' />D.N.I</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese su D.N.I" name='nombre' onChange='' maxLength={18} />
                                                <small className='text-danger'></small>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><Faicons.FaAt className='me-2' />Correo</Form.Label>
                                                <Form.Control type="number" placeholder="Ingrese su Correo" name='precio' onChange='' maxLength={18} />
                                                <small className='text-danger'></small>
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><Faicons.FaKey className='me-2' />Password</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese su Password" name='urlImagen' />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label><Faicons.FaKey className='me-2' />Repetir Password</Form.Label>
                                                <Form.Control type="text" placeholder="Repetir Password" name='urlImagen' />
                                            </Form.Group>
                                            <Button variant="primary" type="submit" className='w-100 my-3' onClick={handleSubmit}>
                                                Crear
                                            </Button>
                                        </Form>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                )}


            </Formik>

        </>
    )
}

export default CreateUser
