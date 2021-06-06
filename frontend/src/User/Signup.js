import React, {useState} from 'react'
import {Redirect, withRouter} from 'react-router-dom'
import {Form, Container, Row, Col, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus} from '@fortawesome/free-solid-svg-icons'
import {registerUser} from './../actions/userActions'
import {setAlert} from './../actions/alertActions'

const Signup = ({history}) => {

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    redirect: false
  })

  const dispatch = useDispatch()

  const userInfo = useSelector(state => state.userRegister)
  console.log(userInfo.error, '🤗');
  const {name, password, email, redirect} = formData

  const handleOnChange = name => e => {
    setFormData({...formData, [name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const user = {
      name: name || undefined,
      email: email || undefined,
      password: password || undefined,
    }

    dispatch(registerUser(user))
  }


  if(userInfo.error === null) {
    return <Redirect to={'/'} />
  } 


  return (
    <Container fluid className='p-5'>
      <Row className="justify-content-center">
        <Col xs lg="8" className='text-center'>
          <FontAwesomeIcon icon={faUserPlus} size="lg" color="purple" /><h3>Sign Up</h3>
        </Col>
      </Row>
      <Form className='p-5' onSubmit={handleSubmit}>
        <Form.Group className='mb-3'>
          <Form.Label>Enter name</Form.Label>
          <Form.Control placeholder="Name" value={name} onChange={handleOnChange('name')} />
        </Form.Group>

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


export default withRouter(Signup)
