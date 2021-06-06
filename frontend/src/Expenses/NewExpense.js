import React, {useState} from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'
import Datetime from 'react-datetime'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from 'react-redux'
import {createExpense} from './../actions/expenseActions'
import { Redirect } from 'react-router-dom'

const NewExpense = () => {

  const [expenseValues, setExpenseValues] = useState({
    title: '',
    category: '',
    amount: '',
    incurred_on: '',
    notes: '',
  })

  const {title, category, amount, incurred_on, notes} = expenseValues

  const dispatch = useDispatch()

  const handleOnChange = name => e => {
    console.log(name, 'name in handleOnChange 💟');
    setExpenseValues({...expenseValues, [name]: e.target.value})
  }

  const handleDateTimePicker = date => {
    console.log(date, 'date in datePicker');
    setExpenseValues({...expenseValues, incurred_on: date})
  }

  const handleSubmit = e => {
    e.preventDefault()

    const expense = {
      title: title || undefined,
      category: category || undefined,
      amount: amount || undefined,
      incurred_on: incurred_on || undefined,
      notes: notes || undefined,
    }
    dispatch(createExpense(expense))
    setExpenseValues({...expenseValues, redirect: true})
  }

  if(expenseValues.redirect) {
    return <Redirect to={'/'} />
  }

  return (
    <Container fluid className='p-5'>
      <Row className="justify-content-center">
        <Col xs lg="8" className='text-center'>
          <FontAwesomeIcon icon={faShoppingCart} size="lg" color="purple" /><h3>Expense Record</h3>
        </Col>
      </Row>
      <Form className='p-5' onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control onChange={handleOnChange('title')} value={title} type="text" placeholder="Title of expense" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Amount ($)</Form.Label>
          <Form.Control onChange={handleOnChange('amount')} value={amount} type="number" placeholder="Amount of expense" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control onChange={handleOnChange('category')} value={category} type="text" placeholder="Category of expense" />
        </Form.Group>

        <Form.Label>Incurred On</Form.Label>
        <Datetime
          value={incurred_on}
          onChange={handleDateTimePicker}
        />

        <Form.Group className="mb-3 mt-3">
          <Form.Label>Notes on expense</Form.Label>
          <Form.Control onChange={handleOnChange('notes')} as="textarea" rows={3} value={notes} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default NewExpense