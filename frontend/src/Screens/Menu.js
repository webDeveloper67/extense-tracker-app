import React, {useState} from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from './../actions/userActions'

const Menu = () => {
  const [expanded, setExpanded] = useState(false)

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin 
 
  const dispatch = useDispatch()

  // Passing two functions to onClick
  const closeSignoutMenu = () => {
    setTimeout(() => {setExpanded(false)}, 150)
  }
  const logoutHandler = () => {
    dispatch(logout());
  };


  return (
    <Navbar bg="light" expand="md" expanded={expanded}>
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
            {userInfo && userInfo ? <>
              <LinkContainer to='/expenses/all' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav.Link>Expenses</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/expenses/reports' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav.Link>Reports</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/expenses/new' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav.Link>Add Expense</Nav.Link>
              </LinkContainer>
              {/* User Profile */}
              <LinkContainer to={`/user/${userInfo._id}`} onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav.Link>My Profile</Nav.Link>
              </LinkContainer>
              {/* Sign Out */}
              <Nav.Link onClick={() => {closeSignoutMenu(); logoutHandler()}}>Sign Out</Nav.Link>
            </> : 
            <>
              <LinkContainer to='/signup' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
              <Nav.Link>SignUp</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/signin' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                <Nav.Link>SignIn</Nav.Link>
              </LinkContainer>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menu