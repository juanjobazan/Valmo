import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { ImOpt } from 'react-icons/im'


const Product = (props) => {
  const { producto, setProducts } = props
  const getOneproduct = async () => {
    const res = await fetch("http://localhost:4000/productos")
    const resJson = await res.json()
    console.log(resJson)
    return resJson
  }

  useEffect(() => {
    getOneproduct()
  }, [])
  return (

    <>
      {
        setProducts
          ?
          resJson.map((producto) =>
            <Card className="d-flex">
              <div className="w-25">
                <Card.Img variant="top" src={producto.nombre} className="img-fluid" />
              </div>
              <Card.Body>
                <Card.Title>{producto.precio}</Card.Title>
                <Card.Text>
                  $AR {producto.delete}
                </Card.Text>
                <Card.Text>
                  {producto.imagen}
                </Card.Text>
                <Button onClick=''>Pagar</Button>
              </Card.Body>
            </Card>) :
          < div ></div >

      }

    </>


  )
}

export default Product
