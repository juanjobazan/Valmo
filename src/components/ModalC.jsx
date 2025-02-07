import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import clienteAxios from '../utils/axiosCliente';
import Swal from 'sweetalert2';

const ModalC = (props) => {
    const { type, idProd, getApi } = props
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [idProducState, setProductState] = useState('')
    const [product, setProducts] = useState({})

    const handleClose = () => setShow(false);

    const handleClick = async () => {

        const res = await clienteAxios.get(`/productos/${idProd}`)
        setProducts(res.data)
        console.log(res.data)
        setShow(true)

    }
    const handleChange = (ev) => {
        const { name, value } = ev.target
        setProducts({ ...product, [name]: value })


    }

    const sendFromPrd = async (id) => {
        try {

            console.log(product.id)
            const res = await clienteAxios.put(`/productos/${id}`, product)

            if (res.status === 200) {
                Swal.fire(
                    res.data.msg,
                    '',
                    'success'
                )
                getApi()
                handleClose()
            }
        } catch (error) {
            if (error.response.status === 400 || 500) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.response.msg
                })
            }


        }
    }

    useEffect(() => {
        setProductState(idProd)
    }, [])
    return (
        <>
            <Button onClick={handleClick}>Editar</Button>
            {


                <Modal show={show} onHide={handleClose} >
                    <Modal.Header closeButton>
                        <Modal.Title>Editar Producto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="NombreHabId">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" name='nombre' placeholder={idProd} disabled />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="NombreHabId">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name='nombre' placeholder="Ingrese el Nuevo Nombre del Producto" value={product?.nombre} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Precioproductd">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" name='precio' placeholder="Ingrese el Precio" value={product?.precio} onChange={handleChange} />
                            </Form.Group>



                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => sendFromPrd(idProd)} >
                            Guardar Cambios
                        </Button>

                    </Modal.Footer>
                </Modal>

            }

        </>
    )
}

export default ModalC
