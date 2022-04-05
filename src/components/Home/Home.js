import React, {useContext} from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import {Client, totalSold} from '/Users/jonathanaldas/Documents/CODE/react-practice/transactions-io2/transactions-io-2/src/context/DataContext.js'
import './Home.css'
import {
    Link,

  } from "react-router-dom";
  
export default function Home() {
    const {state, deleteTask} = useContext(Client)


    const showClients = state.map(client => {
        function closed(){
            deleteTask(client.id)
        }

        return(
             <Container key={client.id} className='cont'fluid='sm'> 
                <div className="buttons">
                    <Button  onClick={() => deleteTask(client.id)} variant="danger" className='edit-btn' >Delete</Button>{' '}
                    <Link to={`/edit-client/${client.id}`}>
                        <Button variant="primary" className='edit-btn' >Edit</Button>{' '}
                    </Link>
                </div>
                <Row>
                    <Col>
                        <h1>{client.transaction}</h1>
                    </Col>     
                </Row>
                <Row>
                    <Col>Name: {client.name}</Col>
                </Row>
                <Row>
                    <Col>Cell-Phone: {client.phoneNumber}</Col>
                    
                </Row>
                <Row>
                    <Col>Email: {client.email}</Col>
                    
                </Row>
                <Row className='this'>
                    <Col>Address: {client.address}</Col>
                    
                </Row>
                <Row>
                    <Col>Price: {client.price}</Col>
                </Row>
                <Link  to={`/each-client/${client.id}`}>
                    <Button variant="primary">See More</Button>
                </Link>
                    {/* <Button variant="primary"onClick={closed}>CLOSED</Button> */}
            </Container>
            
        )
    })
  return (
        <>
            {showClients}
        </>
  )
}
