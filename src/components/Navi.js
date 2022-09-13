import React from 'react'
import { Col, Container, Row,} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import FinishGame from './FinishGame'

export function Navi() {


    const dispatch = useDispatch()
    const money = useSelector((state) => state.money.value)

    return (
      <Container className='naviContainer'>
        <Row>
        <Col><h1>You Have {"$" + money} for expending</h1></Col>
        <Col>
        <FinishGame></FinishGame>
        </Col>
        </Row>       
      </Container>
    )

}
