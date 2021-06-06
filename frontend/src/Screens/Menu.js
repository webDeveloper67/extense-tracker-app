import React, {useState} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'

const Menu = () => {
  const [expanded, setExpanded] = useState(false)


 
  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='text-decoration-underline'>ExpenseTracker</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="expense-tracker-navbar" onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="expense-tracker-navbar">
          <Nav className="mr-auto">
            <LinkContainer to='/' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link className='fw-bolder'>Home</Nav.Link>
            </LinkContainer>
            {/* If user is Authed */}
            <LinkContainer to='/expenses/all' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>Expenses</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/expenses/reports' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>Reports</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/expenses/new' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>Add Expense</Nav.Link>
            </LinkContainer>
            {/* Link to user profile */}
            {/* Sign OUt button */}
            {/* If user is NOT Authed */}
            <LinkContainer to='/signup' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/signin' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>SignIn</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu