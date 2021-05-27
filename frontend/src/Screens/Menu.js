import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Menu = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='text-decoration-underline'>ExpenseTracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="expense-tracker-navbar" />
        <Navbar.Collapse id="expense-tracker-navbar">
          <Nav className="mr-auto">
            <LinkContainer to='/'>
              <Nav.Link className='fw-bolder'>Home</Nav.Link>
            </LinkContainer>
            {/* If user is Authed */}
            <LinkContainer to='/expenses/all'>
              <Nav.Link>Expenses</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/expenses/reports'>
              <Nav.Link>Reports</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/expenses/new'>
              <Nav.Link>Add Expense</Nav.Link>
            </LinkContainer>
            {/* Link to user profile */}
            {/* Sign OUt button */}
            {/* If user is NOT Authed */}
            <LinkContainer to='/signup'>
              <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin'>
              <Nav.Link>SignIn</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu