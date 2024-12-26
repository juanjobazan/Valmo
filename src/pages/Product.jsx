import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ImOpt } from 'react-icons/im'
import { useParams } from 'react-router-dom'


const Product = () => {
  const params = useParams()
  const [product, setProducts] = useState([])


  useEffect(() => {
    const getOneProduct = async () => {
      const res = await fetch(`http://localhost:4000/productos/${params.id}`)
      const resJson = await res.json()
      setProducts(resJson)
      
    }
      getOneProduct()
  }, [])

return (
  <>

{product?.map((product)=>
  <Card key={product.key} className="d-flex">

  <div className="w-25">
    <Card style={{ width: '18rem' }} className='card my-3 mx-3 mt-2 mb-3 m-3'></Card>
    <Card.Img variant="top" src={product.url} className="img-fluid" />
  </div>
  <Card.Body>
    <Card.Title>{product.nombre}</Card.Title>
    <Card.Text>
      N°:{product.id}
    </Card.Text>
    <Card.Text>
      $AR {product.precio}
    </Card.Text>
    <Button >Pagar</Button>
  </Card.Body>
</Card>)}

  








  </>
)
}

export default Product
