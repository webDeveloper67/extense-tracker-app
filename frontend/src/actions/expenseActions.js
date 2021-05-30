import {CREATE_EXPENSE_REQUEST, CREATE_EXPENSE_SUCCESS, CREATE_EXPENSE_FAIL} from './../constants'
import axios from 'axios'
import {setAlert} from './alertActions';


export const createExpense = expense => async dispatch => {
  try {
    
    dispatch({type: CREATE_EXPENSE_REQUEST})
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const {data} = await axios.post(`/api/expenses`, expense, config)

    dispatch({
      type: CREATE_EXPENSE_SUCCESS,
      payload: data
    })
  } catch (error) {
    console.log(error.response)
    dispatch({
      type: CREATE_EXPENSE_FAIL,
    })
    if(error.response) {
      const message = error.response.data.message
      dispatch(setAlert(message, 'danger'))
    }
  }
}