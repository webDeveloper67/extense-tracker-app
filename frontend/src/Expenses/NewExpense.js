import React, {useState} from 'react'
import {Form, Button, Container} from 'react-bootstrap'
import Datetime from 'react-datetime'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from 'react-redux'
import {createExpense} from './../actions/expenseActions'
import {setAlert} from './../actions/alertActions'

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

  const expense = useSelector(state => state.expenses)

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
      title: title,
      category: category,
      amount: amount,
      incurred_on: incurred_on,
      notes: notes,
    }
    
    if(expense.error) {
      console.log(expense.error, 'expense.error')
      Object.values(expense.error, 'keys')
      dispatch(setAlert('sth', 'danger'))
    }
    dispatch(createExpense(expense))
  }

  return (
    <Form className='p-5' onSubmit={handleSubmit}>
      <Container fluid>
      <FontAwesomeIcon icon={faShoppingCart} size="lg" color="purple" /><h3 className='d-inline-block m-3'>Expense Record</h3>

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
      </Container>
    </Form>
  )
}

export default NewExpense