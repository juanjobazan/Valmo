import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import '../css/Table.css'
import clienteAxios from '../utils/axiosCliente';
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ProductAdminPage = () => {
    const [product, setProducts] = useState([])
    const [refreshState, resRefreshState] = useState(false)
    const getApi = async () => {
        const res = await clienteAxios.get('/productos')
        setProducts(res.data)

    }

    const handleClick = async (id) => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Estas Seguro?',
            text: "No podras Revertir Esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'SI, Eliminar!',
            cancelButtonText: 'No, Cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                clienteAxios.delete(`/productos/${id}`)
                    .then(res => {
                        if (res.status === 200) {
                            swalWithBootstrapButtons.fire(
                                'Eliminado!',
                                res.data.msg,
                                'success'
                            )
                        }
                    })



                resRefreshState(true)
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Esta Informacion NO se Elimino :)',
                    'error'
                )
            }
        })




    }


    useEffect(() => {
        getApi()
        resRefreshState(false)
    }, [refreshState])
    return (
        <>

            <div className='mx-3 my-3 py-2 px-2 '>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>PRECIO</th>
                            <th>ACCIONES</th>
                        </tr>
                    </thead>
                    <tbody>

                        {product?.map((prod) =>
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.nombre}</td>
                                <td>{prod.precio}</td>
                                <td>
                                    
                                    <Button variant='danger' onClick={() => { handleClick(prod.id) }}>Eliminar</Button></td>
                            </tr>


                        )


                        }
                    </tbody>
                </Table>
            </div>

        </>


    )
}

export default ProductAdminPage
