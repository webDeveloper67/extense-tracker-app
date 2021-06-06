import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons'
import {loginUser} from './../actions/userActions'

const Signin = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userLogin)
  
  const {password, email} = formData

  const handleOnChange = name => e => {
    setFormData({...formData, [name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      email: email || undefined,
      password: password || undefined,
    }

    dispatch(loginUser(user))
  }


  if(userInfo.error === null) {
    return <Redirect to={'/'} />
  } 


  return (
    <Container fluid className='p-5'>
      <Row className="justify-content-center">
        <Col xs lg="8" className='text-center'>
          <FontAwesomeIcon icon={faSignInAlt} size="lg" color="purple" /><h3>Sign In</h3>
        </Col>
      </Row>
      <Form className='p-5' onSubmit={handleSubmit}>

        <Form.Group className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleOnChange('email')} />
        </Form.Group>

        <Form.Group className='mb-3 mt-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={handleOnChange('password')} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}


export default Signin
