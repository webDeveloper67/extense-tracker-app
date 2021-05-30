import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import {Jumbotron, Button, Container} from 'react-bootstrap'

const Home = () => {
  return (
    <Jumbotron className='p-5 bg-primary' fluid>
      <Container className='text-light'>
        <h1>Welcome To Our App</h1>
        <p>
          This is a simple Expense Tracker App, If you alreay signed up, go and see the features of this app. Otherwise You can simply sign up by using the buttons below.
        </p>
        <p>
        <LinkContainer to='/signup'>
          <Button variant="outline-warning">Sign Up</Button>
        </LinkContainer>
        {'  '}
        <LinkContainer to='/signin'>
          <Button variant="outline-secondary">Sign In</Button>
        </LinkContainer>
        </p>
      </Container>
    </Jumbotron>
  )
}

export default Home