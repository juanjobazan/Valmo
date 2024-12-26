import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import '../css/Card.css'
import { Link } from 'react-router-dom';
const CardC = ({arrayProduct}) => {
  
return (
<>
{


  arrayProduct?.map((product)=>
  <Card style={{ width: '18rem' }} key={product.id} className='card my-3 mx-3 mt-2 mb-3 m-3'>
  <Card.Img variant="top" src={product.url} />
  <Card.Body>
    <Card.Title className='card-title '>{product.nombre}</Card.Title>
    <Card.Text className='card-text'>
    $AR {product.precio}
    </Card.Text>
    <Card.Text className='card-text'>
    Estado: {product.delete}
    </Card.Text>
    <br />
   <Link to={`/productos/${product.id}`} className='btn btn-outline-secondary'>Ver Mas</Link>
  </Card.Body>
</Card>
  )
}
</>
)
}


export default CardC
