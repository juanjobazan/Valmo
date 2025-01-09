import { Formik } from 'formik'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import * as Faicons from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import productSchema from '../helpers/validationSchemaYupProduct.js'
import clienteAxios from '../utils/axiosCliente.js'

const CreateProduct = () => {
    const navigate = useNavigate()

    const sendFron = async(values)=>{
        try {
            const res = await clienteAxios.post('/productos/', values)
    
            if(res.status === 200){
                Swal.fire(
                    res.data.msg,
                    '',
                    'success'
                )
                navigate('/')
            }
        } catch (error) {
            if(error.response.status ===400 || 500){
                Swal.fire({
                    icon:'error',
                    title:'OOooooopsss..',
                    text: error.response.data.msg

                })
                navigate('/')
            }
        }
    }
    return (
        <>
          <Formik
          initialValues={{nombre:'', precio:'', urlImagen:''}}
          validationSchema={productSchema}
          onSubmit={(values) => sendFron(values)}
          >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
            })=>(
                <div className="container p-4">
         <div className='row'>
             <div className='col-md-4 mx-auto'>
                 <div className='card text-center'>
                     <div class="card-header">
                         <h3 class="text-uppercase">CREAR NUEVO PRODUCTO</h3>
                     </div>
                     <div className='card-body'>
                         <Form className="">

                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaTextWidth className='me-2' />Nombre</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese el Nombre del Producto" name='nombre' value={values.nombre} className={errors.nombre && touched.nombre && 'is-invalid'} onChange={handleChange} maxLength={18} />
                                 <small className='text-danger'>{errors.nombre && touched.nombre && errors.nombre}</small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaDollarSign className='me-2'/>Precio</Form.Label>
                                 <Form.Control type="number" placeholder="Ingrese el Precio del Producto" name='precio' value={values.precio} className={errors.precio && touched.precio && 'is-invalid'} onChange={handleChange} maxLength={18} />
                                 <small className='text-danger'>{errors.precio && touched.precio && errors.precio}</small>
                             </Form.Group>
                             <Form.Group className="mb-3" controlId="formBasicEmail">
                                 <Form.Label><Faicons.FaImage className='me-2'/>magen</Form.Label>
                                 <Form.Control type="text" placeholder="Ingrese URL"  name='urlImagen'/>
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

export default CreateProduct
