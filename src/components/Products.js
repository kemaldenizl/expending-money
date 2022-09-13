import React from 'react'
import { Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap'
import products from "../products.json"
import { buyProduct, } from "../redux/moneySlice"
import { useDispatch } from 'react-redux'

export function Products() {

    
    const dispatch = useDispatch()

    return (
      <Container className='productContainer'>
        <Col>
            <Row xs="4">
        {
            products.map(product => (
                
                <Card className='productCard' key={product.id}>
                    <img alt={product.productName} src={product.productPhoto}></img>
                    <CardBody>
                        <CardTitle tag="h5" className='cardTitle'>{product.productName}</CardTitle>
                        <CardText className='cardText'>{"$" + product.productPrice}</CardText>          
                        <Button 
                        onClick={() => 
                            dispatch(buyProduct([Number(product.productPrice),product.productName]))} 
                        color="success">Purchase</Button>
                    </CardBody>
                </Card>
            ))
        }
            </Row>
        </Col>
      </Container>
    )
  }

