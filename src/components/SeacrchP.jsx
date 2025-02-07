import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import clienteAxios from '../utils/axiosCliente'


const SeacrchP = () => {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')

    const getApi = async () => {
        const res = await clienteAxios.get('/productos')
        console.log(res.data)
        setProducts(res.data)

    }
    const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = []

    } else {
        results = products.filter((dato) =>
            dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
        
            
        )
    }

    //const results = !search ? products : products.filter((dato)=>dato.nombre.toLowercase().includes(search.toLocaleLowerCase()))

    useEffect(() => {
        getApi()
    },[])

    return (
        <>

            <div className='card'>
                <label className='text-center'>Ingrese el Nombre del Producto:</label>
                <input type="text" className='text-center' placeholder='Buscador' value={search} onChange={searcher} />
                <div className='row col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                    {
                       results.map((product) =>
                  
                         
                                <Card key={product.id} style={{ width: '18rem' }} className='my-3 mx-3 mt-2 mb-3 m-3'>
                                <Card.Img variant="top" src="holder.js/100px180" className='h-50' />
                                <Card.Body>
                                    <Card.Title>Codigo: {product.id}</Card.Title>
                                    <Card.Text>
                                        Nombre: {product.nombre}
                                    </Card.Text>
                                    <Card.Text>
                                        Precio: ${product.precio}
                                    </Card.Text>

                                    <Link to={`/productos/${product.id}`} className='btn btn-outline-warning '>Consultar</Link>
                                </Card.Body>
                            </Card>
           
                        )}



                </div>
            </div>

        </>
    )
}

export default SeacrchP
