import React from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardC = ({arrayProduct}) => {
  
return (
<>
{


  arrayProduct?.map((product)=>
  <Card style={{ width: '18rem' }} key={product.id}>
  <Card.Img variant="top" src={product.url} />
  <Card.Body>
    <Card.Title>{product.nombre}</Card.Title>
    <Card.Text>
    $AR {product.precio}
    </Card.Text>
    <Card.Text>
    Estado: {product.delete}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  )
}
</>
)
}


export default CardC
