import React from 'react'
import {Container, Navbar, Nav, NavItem, Button} from 'react-bootstrap'
// import ProgressBar from 'react-bootstrap/ProgressBar'
import '/Users/jonathanaldas/Documents/CODE/react-practice/transactions-io2/transactions-io-2/src/components/Nav/Nav.css'
import {
  Link,
} from "react-router-dom";

export default function NavBar(){  
  return (
    <>
        <Navbar bg="light" expand="lg" sticky='top'>
        <Container>
          <Navbar.Brand>
            <Link className="nav-link" to="/">Transaction Managment</Link> 
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem>   
                <Link className="nav-link"  to="/">Home</Link> 
              </NavItem> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      <div className="nav-btn-cont">
        <Link  to={`/add-client`}>
          <Button className='add-transaction-btn center' variant='primary'>Add Transaction</Button>
        </Link>
      </div>
    </>
  )
}
