import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import CardC from '../components/CardC'
import SeacrchP from '../components/SeacrchP'


const Home = () => {
  const [product, setProducts] = useState([])
  const getApi = async () => {
    const res = await fetch("http://localhost:4000/productos")
    const resJson = await res.json()
    setProducts(resJson)
    console.log(resJson)

  }
  useEffect(() => {
    getApi()
  }, [])
  return (
    <>
      <Container className='py-2'>
      <SeacrchP></SeacrchP>
      <br />
        <Row className='col-xl-12'>
        <CardC arrayProduct={product} />
          


        </Row>
      </Container>

    </>
  )
}

export default Home
